# Memory Management 

## Ram 
--> in ram we have to part - 
    1.Stack 
    2.Heaps

**Stack** --> stores the static data. 
**heaps** --> store the dynamic data. 

## Data Table 

| Unit | Symbol | Conversion | In Bytes |

| ---  | ---    | --- |  --- |
| **Byte**      | B   | Base unit      | 1 B                        |
| **Kilobyte**  | KB  | 1 KB = 1024 B  | 2¹⁰ B                      |
| **Megabyte**  | MB  | 1 MB = 1024 KB | 2²⁰ B = 1,048,576 B        |
| **Gigabyte**  | GB  | 1 GB = 1024 MB | 2³⁰ B = 1,073,741,824 B    |
| **Terabyte**  | TB  | 1 TB = 1024 GB | 2⁴⁰ B ≈ 1.1 trillion B     |
| **Petabyte**  | PB  | 1 PB = 1024 TB | 2⁵⁰ B ≈ 1.13 quadrillion B |
| **Exabyte**   | EB  | 1 EB = 1024 PB | 2⁶⁰ B ≈ 1.15 quintillion B |
| **Zettabyte** | ZB  | 1 ZB = 1024 EB | 2⁷⁰ B ≈ 1.18 sextillion B  |
| **Yottabyte** | YB  | 1 YB = 1024 ZB | 2⁸⁰ B ≈ 1.21 septillion B  |

### Then how it getting store in ram ? 
Stack -> All datas address are store 
Heaps --> actual datas are store 

### Aarry locations
Element -> BaseAdress + index*sizeOfData 