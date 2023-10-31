
export async function IndexPageActions({request}: {request: any}): Promise<null| undefined> {
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);

    return null;
}