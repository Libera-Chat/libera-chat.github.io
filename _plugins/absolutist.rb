require "oga"
require "addressable/uri"

module Jekyll
  class Absolutist
    class << self
      def transmute(doc)
        # combine the site's url from _config with the path to this page
        page_url = Addressable::URI.join(Jekyll.configuration({})["url"], doc.url)
        html = Oga.parse_html(doc.output)

        html.xpath("//*[@href]").each do |elem|
            elem_href = elem.attribute("href")

            # don't absolutify anchor hrefs
            next if elem_href.value.start_with?("#")

            # attempt to join this href on to the url of this page.
            # if this isn't a relative URL, it won't
            new_uri = Addressable::URI.join(page_url, Addressable::URI.parse(elem_href.value))
            # rewrite the href
            elem_href.value = new_uri.to_s
        end

        html.xpath("//*[@src]").each do |elem|
            elem_src = elem.attribute("src")
            new_uri = Addressable::URI.join(page_url, Addressable::URI.parse(elem_src.value))
            elem_src.value = new_uri.to_s
        end

        doc.output = html.to_s
      end

      def should?(doc)
        doc.data.has_key?("absolutify")
      end
    end
  end
end

Jekyll::Hooks.register :pages, :post_render do |doc|
  Jekyll::Absolutist.transmute(doc) if Jekyll::Absolutist.should?(doc)
end
