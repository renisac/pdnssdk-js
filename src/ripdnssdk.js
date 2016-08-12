var pdns_connector = {
    get: function(args) {
        function setHeaders (xhr) {
            //xhr.setRequestHeader('Authorization', 'Token token=' + args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.ren-isac.pdnssdk.v0+json');
        }
        $.ajax({
            url: args.remote,
            type: 'GET',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            cache: args.cache || false
        });
    },

    post: function(args) {
        function setHeaders(xhr) {
            //xhr.setRequestHeader('Authorization', 'Token token=' + args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.ren-isac.pdnssdk.v0+json');
        }

        $.ajax({
            url: args.remote,
            type: 'POST',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            data: JSON.stringify(args.data)
        });
    },

    search: function(args) {
        args.remote = args.remote + '/';
        if (args.query) {
            args.remote += '?q=' + args.query
        }
        this.get(args);
    }
};
