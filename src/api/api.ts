const handleError = (error: any) => {
    console.error('API call failed: ', error);
    throw error;
}
