-- 코드를 입력하세요
select *
from (SELECT DATE_FORMAT(DATETIME, '%H') as HOUR, count(*)
FROM ANIMAL_OUTS
group by HOUR
order by HOUR) a
where HOUR between '09' and '19'