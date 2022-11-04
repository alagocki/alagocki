SHELL := /bin/bash

startdev:
	symfony proxy:start
	symfony server:start -d
	docker-compose up -d
	open https://lagocki.wip
.PHONY: startdev

stopdev:
	symfony server:stop
	symfony proxy:stop
	docker-compose down
.PHONY: stopdev

