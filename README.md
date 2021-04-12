# Members Frontend

---

###### \*\*Samir Talic, JS, React

##### JS Code Assigment

##### My site is published at:<https://4886talga.github.io/members-frontend/>

##### GitHub Repo: https://github.com/4886Talga/members-frontend

**App description**

---

I should create an application that retrieves data from one or more open APIs and displays this data on an React App page. I chose to make an application which search through own made API which is retriving data, which was scraped frpm tretton37 webpage, from MongoDB.

**Functionality**

---

##### **User allows**

- Fillter members by
  - all members
  - name and office
- Sort mebers by
  - name and office
  - social contact links
- Delete all members
- Scrape mebers from webpage

**Workflow**

---

My plan was to organize this project according to MVC pattern, where in model I put my modules that take care of the logic that is behind the functionality. Controller is used as listener and responds to user requests. In View, I have functionality that manipulates DOM.

The root endpoint should prefix all resources:

```javascript
https://fellowship1337.herokuapp.com/api/v1/members
```

All parameters are optional and without them the API will just return the beers in ascending order from their ID. Parameters are passed in as a query string and can be chained together.

All members endpoints return a json array.

```javascript
 {
   "success": true,
    "count": 8,
    "pagination": {
        "next": {
            "page": 2,
            "limit": 8
        }
    },
    "data": [
        {
            "contact": [
                "Twitter"
            ],
            "_id": "606df916824af230b0d2177b",
            "name": "Test Persson",
            "office": "🇸🇪 Stockholm",
            "image": "https://i.1337co.de/profile/test-person-medium",
            "__v": 0
        }
}
```

The project was very instructive and I greatly expanded my knowledge of asynchronous JS and AJAX.
