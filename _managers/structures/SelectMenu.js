class SelectMenu {
    constructor(client, {
        name = null,
        perms = null,
        meperms = null,
    }) {
        this.client = client;
        this.config = {
            name,
            perms,
            meperms
        };
    };
};

module.exports = SelectMenu;