import * as path from 'path';
import * as fs from 'fs';

const file = path.join( process.cwd(), 'records.json');

// read and store db  
function readRecordsSync(file) {
    if (!fs.existsSync(file)) {
        return null; 
    }
    let content = fs.readFileSync(file);
    let records = JSON.parse(content);
    return records; 
}
let records = readRecordsSync(file);

// find record by id 

// find record by applicant 