-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME
FROM (
    select Timestampdiff(hour,i.datetime, o.datetime), i.ANIMAL_ID, i.NAME
    from ANIMAL_INS as i join ANIMAL_OUTS as o on i.ANIMAL_ID = o.ANIMAL_ID
    order by 1 desc limit 2
    ) a