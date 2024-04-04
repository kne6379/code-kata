-- 코드를 입력하세요
SELECT CAR_TYPE, COUNT(*) as CARS
FROM CAR_RENTAL_COMPANY_CAR
WHERE options LIKE ('%열선시트%') OR 
        options LIKE ('%통풍시트%') OR  
        options LIKE ('%가죽시트%') 
group by CAR_TYPE
order by CAR_TYPE asc;