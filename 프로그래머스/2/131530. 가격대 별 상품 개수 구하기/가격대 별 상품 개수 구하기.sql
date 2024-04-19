-- 코드를 입력하세요
SELECT (price-price%10000) as PRICE_GROUP, count(*) as PRODUCTS
FROM PRODUCT
group by 1
order by 1