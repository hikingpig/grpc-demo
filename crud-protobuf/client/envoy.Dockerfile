# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
FROM envoyproxy/envoy:latest

COPY ./envoy.yaml /etc/envoy/envoy.yaml

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml
