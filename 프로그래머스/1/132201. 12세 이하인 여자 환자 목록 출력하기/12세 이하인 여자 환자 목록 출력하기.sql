SELECT PT_NAME, PT_NO, GEND_CD, AGE, ifnull(TLNO,'NONE') as TNLO
FROM PATIENT
WHERE age <= 12 && GEND_CD = 'W'
order by age desc, PT_NAME;