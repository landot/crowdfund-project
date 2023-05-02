export interface IPledge {
    name: string;
    minimumCost: number;
    pledgesLeft?: number;
    description: string;

}

export const pledges: IPledge[] = [
    {
        name: 'Pledge with no reward',
        minimumCost: 0,
        pledgesLeft: undefined,
        description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`
    },
    {
        name: 'Bamboo Stand',
        minimumCost: 25,
        pledgesLeft: 101,
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`
    },
    {
        name: 'Black Edition Stand',
        minimumCost: 75,
        pledgesLeft: 64,
        description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`
    },
    {
        name: 'Mahogony Special Edition',
        minimumCost: 200,
        pledgesLeft: 0,
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.`
    },
]
