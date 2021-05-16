#!/bin/sh

ngssc insert /usr/share/nginx/html
nginx-debug -g 'daemon off;'
