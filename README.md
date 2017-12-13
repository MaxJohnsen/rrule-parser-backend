# RRULE Parser

A web backend that accepts a iCal formatted recurrence rule and sends back a generated list of dates as JSON.

## Why?

Created for an old back-end server unable to run the [rrule.js](https://github.com/jakubroztocil/rrule) javascript library directly.

## Stack

* Node.js
* Express.js
* [rrule.js](https://github.com/jakubroztocil/rrule)

## Hosting

The application is hosted on [Heroku](https://rrule-parser.herokuapp.com), and is publicly available.

## How to use

You can either send requests to the publicly available Heroku service, or host the application on your own.

### Request/Response example

HTML Request:

```
POST /parse HTTP/1.1
Host: rrule-parser.herokuapp.com
Content-Type: application/json

{
	"rrule": "INTERVAL=2;FREQ=MONTHLY;BYDAY=+2WE;COUNT=10;DTSTART=20171213"
}
```

Response:

```
{
    "dates": [
        "2017-12-13T00:00:00.000Z",
        "2018-02-14T00:00:00.000Z",
        "2018-04-10T23:00:00.000Z",
        "2018-06-12T23:00:00.000Z",
        "2018-08-07T23:00:00.000Z",
        "2018-10-09T23:00:00.000Z",
        "2018-12-12T00:00:00.000Z",
        "2019-02-13T00:00:00.000Z",
        "2019-04-09T23:00:00.000Z",
        "2019-06-11T23:00:00.000Z"
    ],
    "friendlyText": "every 2 months on the 2nd Wednesday for 10 times"
}
```
