function solve(s) {
    let upperCount = 0;
    let lowerCount = 0;   
    for (let char of s) {
        if (char >= 'A' && char <= 'Z') {
            upperCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowerCount++;
        }
    }
        if (upperCount > lowerCount) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}