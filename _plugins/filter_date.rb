module Jekyll
  module DateFilter
    def ord(v)
      (['1', '21', '31'].include?(v) && "st") ||
      (['2', '22'].include?(v) && "nd") ||
      (['3', '23'].include?(v) && "rd") ||
      "th"
    end

    def date_post(postdate)
      ord = ord(postdate.strftime("%-d"))
      postdate.strftime("%-d#{ord} %B %Y")
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)