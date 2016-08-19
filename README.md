Client ID:
3ef636b310d792e

Client secret:
4392fcfd022b218db388156aad20b9697470de9f

reflux@0.2.8

# image-detail page

if requested via

    images/:id,

#### routes.jsx catches it and calls

#### ImageDetail component

    componentWillMount(){
        Actions.getImage(this.props.params.id);
    },

#### actions.jsx sees the action and since

#### image-store.jsx is listening

    listenables: [Actions],

#### image-store.getImage is called

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

#### then triggerChange() emits 'change'

#### and since image-detail.jsx is listening

    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],

#### onChange fires off

    onChange(){
        this.setState({
            image: ImageStore.find(this.props.params.id)
        })
    },

#### which calls ImageStore.find

    find(id){
        var image = _.find(this.images, {id:id});
        if (image){
            return image;
        } else {
            this.getImage(id);
            return null;
        }
    },

#### and now setState triggers a re-render