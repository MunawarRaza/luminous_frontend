# FROM node:18-alpine

# RUN npm install -g @mockoon/cli@5.0.0
# COPY ./config.json ./config.json

# # Install curl for healthcheck and tzdata for timezone support.
# RUN apk --no-cache add curl tzdata

# # Do not run as root.
# RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon
# RUN chown -R mockoon ./config.json
# USER mockoon

# EXPOSE 9005

# ENTRYPOINT ["mockoon-cli","start","--disable-log-to-file","--data","./config.json","--port","9005"]

# # Usage: docker run -p <host_port>:<container_port> mockoon-test

FROM mockoon/cli:latest
COPY config.json ./config.json

SHELL ["/bin/bash", "-c"]

EXPOSE 9005
CMD ["--data", "./config.json"]