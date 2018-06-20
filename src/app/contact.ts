export class Contact {
    constructor(
    public surname: string,
    public name:    string,
    public desc:    string,
    public url?:     string,
    public phone?:   string,
    public email?:   string,
    public facebook?:    string,
    public instagram?:   string,
    public birthday?:    string,
    public information?: string,
    public categories?: any) {}
}
