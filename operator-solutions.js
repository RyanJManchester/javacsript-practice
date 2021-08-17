/* comments = javascript.info/comparisons assignment in the odin project.
are the following assumptions right? */
5 > 4 = true;
"apple" > "pineapple"; false
"2" > "12" ; false
undefined == null; true
undefined === null; false
null = "\n0\n" ; true 
null === +"\n0\n"; false
// real answers are:
5 > 4 = .true;
"apple" > "pineapple"; .false
"2" > "12" ; .true - //they remain strings when being assesed, not converted.
undefined == null; .true
undefined === null; .false
null = "\n0\n" ; .false;null only equals undefined;
null === +"\n0\n"; .false
null == undefined;