#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Created on 10/09/2017

@author: Steven Rizo
Geovisualization course
"""

#### Import the python libraries we need ####
import matplotlib.pyplot as plt # use plt as a shorthand
import csv
import pandas as pd
import numpy as np
import datetime as dt

#### Path (Directory & name) of the CSV file ####
csvpath = './all_month.csv'

#### Read the Earthquakes CSV file into a DataFrame variable ####
df = pd.read_csv(csvpath)

df.columns

x1 = []
for thistime in df['time']:
    thistime = thistime[0:-1]
    x1.append(dt.datetime.strptime(thistime,'%Y-%m-%dT%H:%M:%S.%f'))
    
x2 = []
for thistime in df['time']:
    thistime = thistime[0:-1]
    x2.append(dt.datetime.strptime(thistime,'%Y-%m-%dT%H:%M:%S.%f'))
    
x3 = df['latitude']

y1 = df['mag']

y2 = df['depth']

y3 = df['longitude']

plt.figure(1)
plt.xlabel('Time')
plt.ylabel('Magnitude')
plt.plot(x1,y1,'b.')

plt.figure(2)
plt.xlabel('Time')
plt.ylabel('Depth')
plt.plot(x2,y2,'r.')

plt.figure(3)
plt.xlabel('Latitude')
plt.ylabel('Longitude')
plt.plot(x3,y3,'g.')

plt.show()