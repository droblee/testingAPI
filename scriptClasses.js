class UserObj{
    constructor(
        id,
        name,
        username,
        email,
        address = {
            street,
            suite,
            city,
            zipcode,
            lat,
            lng
        },
        phone,
        website,
        company = {
            name,
            catchPhrase,
            bs
        }
    ){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

export default UserObj;
