-- 코드를 입력하세요
SELECT ANIMAL_TYPE, count(*)
FROM ANIMAL_INS
group by ANIMAL_TYPE
order by 1 asc