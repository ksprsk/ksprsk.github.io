.PHONY: install dev preview build build-dev clean

JEKYLL = bundle exec jekyll
HOST = 0.0.0.0
DEV_CONFIG = _config.yml

ifneq ("$(wildcard _config_dev.yml)","")
DEV_CONFIG = _config.yml,_config_dev.yml
endif

install:
	bundle install

dev:
	JEKYLL_ENV=development $(JEKYLL) serve --livereload --host $(HOST) --config $(DEV_CONFIG)

preview:
	JEKYLL_ENV=production $(JEKYLL) serve --livereload --host $(HOST) --config _config.yml

build:
	JEKYLL_ENV=production $(JEKYLL) build --config _config.yml

build-dev:
	JEKYLL_ENV=development $(JEKYLL) build --config $(DEV_CONFIG)

clean:
	$(JEKYLL) clean
