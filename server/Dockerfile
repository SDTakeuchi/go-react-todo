FROM golang:1.15.3

WORKDIR /go/src/app

RUN go get gopkg.in/gorp.v1
RUN go get github.com/codegangsta/gin
RUN go get github.com/lib/pq
RUN go get github.com/gin-gonic/gin

COPY . /go/src/app
RUN ls -l /go/src/app
# RUN go build main.go structs.go
RUN go build
ENV PORT 8080
