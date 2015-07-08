App.API = Ember.Object.create({

    ROUTE: {
        INDEX: "index",
        ALBUM: "album",
        ALBUMS: "albums",
        BLOG: "blog",
        BLOGS: "blogs",
        FLYER: "flyer",
        FLYERS: "flyers",
        PRODUCT: "product",
        TRIP: "trip",
        TRIPS: "trips",
        ITINERARY: "itinerary",
        FILE: "file",
        FILES: "files",
        CONTACT: "contact",
        CONTACTS: "contacts",
        FRIEND: "friend",
        FRIENDS: "friends",
        USER: "user",
        USERS: "users",
        ADMINTOOLS: "admintools",
        FIXTUREDATA: "fixturedata"
    },

    APISPEC: {
        GET: {
            MODULE: '/apispec/module/{modulename}',
            SPEC: '/apispec/json',
            SITE: '/apispec/site'
        }

    },

    FILE: {
        GET: {
            SEARCH: '/file/search',
            INFO: '/file/info/{uuid}',
            THUMBNAIL: '/file/thumbnail/{uuid}',
            STREAM: '/file/stream/{uuid}',
            DOWLOAD: '/file/download/{uuid}'
        },

        POST: {
            LIST: '/file/list',
        	SAVE: '/file/save',
            UPLOAD: '/file/upload'
        },

        DELETE: {
            REMOVE: '/file/remove/{uuid}'
        }

    },
    
    SHARE: {
    	GET: {
    		INFO: '/file/i/{uuid}',
    		FILE: '/file/page/{uuid}',
    		STREAM: '/file/s/{uuid}',
    		THUMBNAIL: '/file/tmb/{uuid}',
    		DOWNLOAD: '/file/d/{uuid}'
    	}
    },

    ALBUM: {
        GET: {
            LOAD: '/album/load/{uuid}',
            SEARCH: '/album/search'
        },
        POST: {
            SAVE: '/album/save'
        },
        DELETE: {
            REMOVE: '/album/remove/{uuid}'
        }
    },
    
    BLOG: {
        GET: {
            LOAD: '/blog/load',
            STREAM: '/blog/stream/{uuid}',
            SEARCH: '/blog/search'
        },
        POST: {
            SAVE: '/blog/save'
        },
        DELETE: {
            REMOVE: '/blog/remove/{uuid}'
        }
    },

    FLYER: {
        GET: {
            LOAD: '/flyer/load/{uuid}',
            SEARCH: '/flyer/search'
        },
        POST: {
            SAVE: '/flyer/save'
        },
        DELETE: {
            REMOVE: '/flyer/remove/{uuid}'
        }
    },

    TRIP: {
        GET: {
            LOAD: '/trip/load/{uuid}',
            SEARCH: '/trip/search',
            PRINT: '/trip/print/{uuid}'
        },
        POST: {
            SAVE: '/trip/save',
            RECENT: '/trip/recent',
            SHARE: '/trip/share/{uuid}'
        },
        DELETE: {
            REMOVE: '/trip/remove/{uuid}'
        }
    },

    ITINERARY: {
        GET: {
            LOAD: '/itinerary/load'
        },
        POST: {
            LOAD: '/itinerary/load',
            SAVE: '/itinerary/save'
        },
        DELETE: {
            REMOVE: '/itinerary/remove/{uuid}'
        }
    },

    PRODUCT: {
        GET: {
            SEARCH: '/product/search',
            LOAD: '/product/load/{uuid}',
            STREAM: '/product/stream/{uuid}'
        },

        POST: {
            SAVE: '/product/save',
            UPLOAD: '/product/upload'
        },

        DELETE: {
            REMOVE: '/product/remove/{uuid}'
        }

    },

    SOCIALCOMMENTS: {
        POST: {
            LOAD: '/socialcomment/load',
            SAVE: '/socialcomment/save'
        },
        DELETE: {
            REMOVE: '/socialcomment/remove/{uuid}'
        }
    },
    
    CONTACT: {
    	GET: {
    		LOAD: '/contact/load',
    		SEARCH: '/contact/search'
    	},
    	POST: {
    		SAVE: '/contact/save'
    	},
    	DELETE: {
            REMOVE: '/contact/remove/{uuid}'
        }
    },

    USER: {
        GET: {
            LOAD: '/user/load/{id}',
            LOAD_CURRENT_USER: '/user/load-current-user', 
            ROLE: '/user/role',
            SEARCH: '/users/search/{keyword}',
            AVATAR: '/user/avatar/{username}'
        },
        POST: {
            EMAIL_EXISTS: '/user/email-exists',
            SIGNUP: '/user/signup',
            SAVE: '/user/save',
            RESET_PASS: '/user/reset-pass',
            USERNAME_EXISTS: '/user/username-exists'
        },
        DELETE: {
            REMOVE: '/users/remove/{id}'
        }

    },

    FRIENDS: {
        GET: {
            LOAD: "/friend/load/{username}",
            MY: "/friend/my",
            LIST: "/friend/list/{keyword}"
        },
        POST: {
            FIND: "/friend/find",
            INVITE: "/friend/invite",
            CONNECT: "/friend/connect",
            DISCONNECT: "/friend/disconnect"
        }
    },

    ADMINTOOLS: {

        FIXTUREDATA: {
            GET:{
                LOAD: '/fixturedata/load/{uuid}'
            },
            POST:{
                SEARCH: '/fixturedata/search',
                SAVE: '/fixturedata/save',
                IMPORT: '/fixturedata/import'
            },
            DELETE: {
                REMOVE: '/fixturedata/remove/{uuid}'
            }

        }

    },

    EVENT: {
        GET: {
            LOAD: "/event/load/{id}",
            FIRE: "/event/fire/{id}"
        },
        POST: {
            SAVE: "/event/save",
            LIST: "/event/list"
        },
        DELETE: {
            REMOVE: "/event/remove/{id}"
        }
    },

    DASHBOARD: {
        GET: {
            LOAD_RECENT_UPDATES: '/dashboard/load/updates'
        }
    }

});
