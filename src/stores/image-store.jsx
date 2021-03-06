var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({

    listenables: [Actions],

    find(id){
        var image = _.find(this.images, {id:id});
        if (image){
            return image;
        } else {
            this.getImage(id);
            return null;
        }
    },

    getImage(id){
        Api.get('gallery/image/' +id)
            .then(function(json){
                if (this.images){
                    this.images.push(json.data);
                } else {
                    this.images = [json.data];
                }
                this.triggerChange();
            }
            .bind(this))
    },

    getImages(topicId){
       return Api.get('topics/' + topicId)
                    .then(function(json){
                        this.images = _.reject(json.data, function(image){
                            return image.is_album
                        });
                        this.triggerChange();
                    }
                    .bind(this))
    },

    triggerChange(){
        this.trigger('change', this.images);
    }

});