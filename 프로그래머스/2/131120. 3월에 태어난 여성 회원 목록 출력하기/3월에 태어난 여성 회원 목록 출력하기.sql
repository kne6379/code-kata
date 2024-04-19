-- 코드를 입력하세요
SELECT MEMBER_ID,MEMBER_NAME, GENDER, date_format(DATE_OF_BIRTH,'%Y-%m-%d') as DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE TLNO IS NOT NULL && date_format(DATE_OF_BIRTH,"%m") = 03 && gender ="w"
order by 1