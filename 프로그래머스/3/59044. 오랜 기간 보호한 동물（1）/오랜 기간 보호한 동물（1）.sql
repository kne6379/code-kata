-- 코드를 입력하세요
SELECT i.NAME, i.DATETIME
FROM ANIMAL_INS i left join ANIMAL_OUTS o on 
        i.ANIMAL_ID = o.ANIMAL_ID
WHERE ISNULL(o.DATETIME)
order by 2 asc limit 3