export const parseStringEnv = (name: string): string => {
    const value: string | undefined = process.env[name];
    if(!value){
        throw new Error(`Invalid env ${name}`)
    }

    return value
};