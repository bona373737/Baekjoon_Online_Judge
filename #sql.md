```
SELECT name
	,CASE WHEN absent >=4 THEN 'F'
	 ELSE
		CASE WHEN score >= 90 THEN 'A'
		     WHEN score >= 80 THEN 'B'
		     WHEN score >= 70 THEN 'C'
		     WHEN score >= 60 THEN 'D'
		ELSE 'F' 
		END
	END AS grade
FROM database;
```


```
SELECT title, view_count, post_date 
FROM notice 
GROUP BY notice_dept
ORDER BY DESC  
```