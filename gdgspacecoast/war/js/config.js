/*global boomerang*/
boomerang.factory('Config', function () {
    return {
        //modify these
        'name'          : 'GDG Space Coast',
        'id'            : '103959793061819610212',
        'google_api'    : 'AIzaSyA9ALjr2iWvhf3Rsz9-bH0cEcDcrdkpuAg',
        'pwa_id'        : '5915725140705884785', //picasa web album id, must belong to google+ id above
        'domain'        : 'http://www.gdgspacecoast.org',
        'cover' : {
            title : 'Android DevFest Space Coast',
            subtitle : 'Our biggest Android event ever was held at Florida Tech on October 18th!',
            button : {
                text : 'See the pictures',
                url : 'https://plus.google.com/u/0/events/gallery/cafgfoud5on0fd60b8rtr5rvb5c'
            }
        }
    };
});