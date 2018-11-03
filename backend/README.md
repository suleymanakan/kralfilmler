# React & Redux Kralfilimler uygulaması için bir Backend oluşturuldu
Bu Restful API, Node.JS ve Express ile geliştirildi.

## Nasıl kurulur
Bu komutu kopyalayın ve bağımlılıkları yükleyin.

`npm install`

## Ortam değişkenleri
Kök dizinde ".env" adlı bir dosya oluşturun ve içeriğini aşağıdaki gibi doldurun.

```ruby
DB_HOST=xxx
DB_NAME=xxx
```

## Bu komut ile çalıştır
`npm start:dev` // kendi localinde

## Son olarak

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | List all movies. |
| /api/movies | `POST` | {'title':'foo', 'cover':'cover url' } | Create a new movie. |
| /api/movies/:_id | `GET` | Empty | Get a movie. |
| /api/movies/:_id | `PUT` | {'title':'foo', 'cover':'new cover url'} | Update a movie with new info. |
| /api/movies/:_id | `DELETE` | Empty | Delete a movie. |

