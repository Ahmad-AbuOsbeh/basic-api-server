'use strict';
const uuid = require('uuid').v4;

class Clothes {
  constructor() {
    this.db = [];
  }

  read(id) {
    if (id) {
      return this.db.find((item) => {
        console.log('hello from get id');
        return item.id == id;
      });
    } else {
      return this.db;
    }
  }

  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.db.push(record);
    return this.db;
    // return record;
  }
  update(id, obj) {
    this.db.forEach((item, idx) => {
      if (item.id == id) {
        this.db[idx].data = obj;
        // return obj;
      } else {
        return item;
      }
    });
    return this.db;
  }
  delete(id) {
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].id == id) {
        this.db.splice(i, 1);
      }
    }
    // console.log('hello from delete');
    // this.db = this.db.filter((item) => {
    //   return item.id != id;
    // });
    // console.log(this.db);
    return typeof this.db.id;
    // return console.log('gggg',this.db);
  }
}

module.exports = Clothes;
