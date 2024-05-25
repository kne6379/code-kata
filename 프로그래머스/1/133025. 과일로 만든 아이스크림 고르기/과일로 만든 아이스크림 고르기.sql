select flavor
from 
(
select f.flavor, f.total_order , i.INGREDIENT_TYPE
from FIRST_HALF f inner join ICECREAM_INFO i on f.flavor = i.flavor 
where total_order > 3000
) t
where INGREDIENT_TYPE in ('fruit_based')
order by total_order desc