-- 코드를 입력하세요
SELECT i.ANIMAL_ID, o.NAME
FROM ANIMAL_INS as i join ANIMAL_OUTS as o on i.ANIMAL_ID = o.ANIMAL_ID
where i.datetime > o.datetime
order by i.datetime