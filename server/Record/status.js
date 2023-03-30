const pending = ['Application Submitted']

const open = ['Meter Release', 'Permit Issued']

const issued = ['Certificate of Completion', 'Certificate of Occupancy']

const closed = [
  'VOIDED - Duplicate Permit',
  'VOIDED - Owner Changed Contractor',
  'Inspections Finaled',
  'Permit Expired'
]

module.exports = { 
    pending,
    open,
    issued,
    closed
 }
