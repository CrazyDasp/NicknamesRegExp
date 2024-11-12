export class Validator{
    validateUsername(username) {
        const pattern = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
      
        if (!pattern.test(username)) {
            return false;
        }

        if (/\d{4,}/.test(username)) {
            return false;
        }

        return true;
    }
}