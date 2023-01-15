The final dataset is contained in the job_data.csv file. This data comes from three different sources.

Source 1: US Department of Labor, O*NET Career Changes Matrix.
- The data is contained in ONET_data.csv.
- The original source is: https://www.onetcenter.org/dictionary/20.3/excel/career_changers_matrix.html
- This data is used to map existing oil and gas occupations to alternative occupations based on overlapping skills and trainings.

Source 2: CA Labor and Workforce Development Agency, Employment Development Department.
  Regional Planning Unit Overviews:
  - The data is contained in RPU.csv.
  - The original source is: https://data.edd.ca.gov/Regional-Economic-Profiles/Regional-Planning-Unit-Overviews/yimz-gm8e  
  - The data includes information about education and training needed for every occupation in a given MSA.

  Occupational Employment and Wage Statistics:
  - The data is contained in employment_wage.csv.
  - The original source is: https://data.edd.ca.gov/Wages/Occupational-Employment-and-Wage-Statistics-OEWS-/pwxn-y2g5
  - The data includes base employment and job openings for every occupation in 2022. It also includes median hourly and annual salaries for every occupation in 2022.

  Oil and Gas Industry Analysis:
  - The data is contained in oil_gas_soc_codes.csv.
  - There is no public link.
  - This data includes the set of Standard Occupation Codes that align with the core set of oil and gas workers.

In order to pull these data sources together, we used excel and a number of commands in the terminal, including grep, sed, awk, and csvkit. These commands were used to do the following:
- Filter down O*NET data to only the rows relevant to oil and gas jobs (ex: 'grep '^47-2111' ONET_data.csv >> filtered_ONET.csv')
- Match filtered down O*NET data to wage, employment, education, training data for each occupation for each relevant MSA (ex: excel VLOOKUP)
- Change delimiter of files in order to more easily complete other tasks at other points in time (ex: csvformat -D '|' comma_delimited.csv > pipe_delimited.csv)
- Remove columns that are not relevant to show on the website that were included in original data sets (ex: cut -d'|' -f1-6,9-12 all_data.csv > removed_cols.csv)
