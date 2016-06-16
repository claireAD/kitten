require "kitten/version"
require "kitten/engine"

module Kitten
  class << self
    def load
      configure_sass
    end

    def assets_path
      @assets_path ||= File.join gem_path, 'assets'
    end

    def stylesheets_path
      File.join assets_path, 'stylesheets'
    end

    private

    def configure_sass
      require 'sass'

      ::Sass.load_paths << stylesheets_path
    end
  end
end

Kitten.load
