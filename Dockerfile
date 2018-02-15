FROM golang:1.9.4
WORKDIR /go/src/github.com/omegaice/njcoast-mock/
COPY main.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o mock .

FROM scratch  
WORKDIR /root/
COPY --from=0 /go/src/github.com/omegaice/njcoast-mock/mock .
COPY assets/ /root/assets
EXPOSE 8081
CMD ["./mock"]  