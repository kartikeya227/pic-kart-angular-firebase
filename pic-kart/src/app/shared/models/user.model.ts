export class User {
    uid? : string;
    displayName? : string | null;
    email? : string | null;
    phoneNumber? : string | null;
    photoURL? : string | null;
    providerId? : string;
    role? : string;
    gender? : string;
    address? : string;
    productList? : Array<string>;

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
