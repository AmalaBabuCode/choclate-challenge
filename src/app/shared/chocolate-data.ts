export const chocolateData = {
  pagination: {
    offset: 0,
    limit: 25,
    total: 10,
  },
  data: [
    {
      id: '1',
      name: 'Sesam',
      brand: 'Ritter-Sport',
      image:
        'https://www.veganleben.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/i/ritter-sport-vegan-sesam-100-g-14282.png',
      currency: 'EUR',
      prices: [
        {
          price: 2.09,
          shop: 'Ritter-Sport',
          link: 'https://example.com/rs-sesam-rs',
          unit: 'g',
          amount: 100,
        },
        {
          price: 1.99,
          shop: 'Amazon',
          link: 'https://example.com/rs-sesam-am',
          unit: 'g',
          amount: 100,
        },
        {
          price: 3.49,
          shop: 'REWE',
          link: 'https://example.com/rs-sesam-re',
          unit: 'g',
          amount: 200,
        },
      ],
      nutrition: {
        fat: {
          total: 38,
          saturated: 19,
        },
        carbohydrates: {
          total: 42,
          sugar: 40,
        },
        protein: 11,
        salt: 1,
      },
    },
    {
      id: '2',
      name: 'Marzipan',
      brand: 'Ritter-Sport',
      image: 'https://m.media-amazon.com/images/I/61Q6yx9HBCL._SL1200_.jpg',
      currency: 'EUR',
      prices: [
        {
          price: 1.19,
          shop: 'Ritter-Sport',
          link: 'https://example.com/rs-marzipan-rs',
          unit: 'g',
          amount: 100,
        },
        {
          price: 1.19,
          shop: 'Amazon',
          link: 'https://example.com/rs-marzipan-am',
          unit: 'g',
          amount: 100,
        },
        {
          price: 2.19,
          shop: 'REWE',
          link: 'https://example.com/rs-marzipan-re',
          unit: 'g',
          amount: 200,
        },
        {
          price: 2,
          shop: 'Edeka',
          link: 'https://example.com/rs-marzipan-ed',
          unit: 'kg',
          amount: 0.2,
        },
      ],
      nutrition: {
        fat: {
          total: 28,
          saturated: 13,
        },
        carbohydrates: {
          total: 53,
          sugar: 52,
        },
        protein: 6,
        salt: 2,
      },
    },
    {
      id: '3',
      name: 'Die Kräftige',
      brand: 'Ritter-Sport',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFRUXFxgXFhgYGBcVFRcVFRcYFhgXGBcaHCggGB0lGxYWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLy0tLS0tLS4vLS0tLS0tLS0tLy0vLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQFBwIDBgj/xABREAABAwEEBAcJCQ8EAgMAAAABAAIRAwQSITEFQVFhBgcTInGBkRUjMlJTobHB0RQzQmJykpOy8BYXJCVDVHOCg5SiwtLT4WOjw/E08jVERf/EABsBAAIDAQEBAAAAAAAAAAAAAAADAgQFAQYH/8QAPREAAQMCAwMJBwIFBAMAAAAAAQACEQMhBBIxQVFxBRMiYYGRobHwFBUyM8HR4SPxNEJSU5IkgrLiQ2LS/9oADAMBAAIRAxEAPwC8UIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEKveG+l7RRtN2lVcxvJtMCIkl4JiNygxwvto/Ku66UqjVxzKbi0g24fUhalHkqrVpio1wvvn7K3k1dbaQMGowHYXNn0qlrXwhtVUy+u87pLW/NEDzJ3o7Sbw2CAekJVTlDLo3x+33T2cjH+Z1+r7/AIVu90KPlafz2+1IdJUfKs+cFV3dXGIbIz2if+kM0rIkBpG0YhL95O1y+jp37N6YOR27z3hWuK7SAQZBEiATgdaHVmiSTlngdk+pVS7S0Ztb2bcAl7qHxW9i770t8Hj/ANUv3I7+vw/7Kyu7dn8qOw+xY927P5UdjvYq17q4xdbOcQJjbCGaXkSAwjaIIUPeNTWB3Hbp37E33Ozee8fZWX3bs/lR2O9iQ6ds4/KDscfUq2dpaM2t7NuAR3UPit7Fwcpv3DxXfczN57x9lY/d6z5cp/C/+lL3es/lP4X+xVrV0yGiXXGjaYA86GaYvCWhhG0QR2hSPKLw3NltvvE/fqURyOycuYzxEx62qwDwrsQJBtDARgZvDHsWf3V2P84Z5/YqH0npY8tU5jPDd8EeMVq7oPkDkmycQLmJG0bV6puBYWh2bUT4X9bAvOOeWvLcswY8Y3fuVfY4WWLH8IZh8oerFZfdXY/zhnn9ioDum6Y5NkzEXBM5RG1YnSpGBYyRnzRKl7Aw/wA3ko86d3ruXoH7q7H+cM8+vqSfdXY/zhmHT7MVQDdKOMxTYYEnmjIZlJ3WPiM+aEDk9v8AUjnurx/C9CDhNZPzin2o+6ayRPuin85UD7sqXb/Ii741zDtWDNJucYFNpJyAbJPUojAM1z6a6ds3t2rrnuEdHXTr3Ra8r0F90lj/ADml88BbBp+y/nNH6RntXnutpB7TDqTWnYWwVnTtdRwltGRtDHEYbwg4KkG5i+2+RHrz2IBql2UNvugz3CV6EbpqzHK0UfpGe1Pg6RIxC8wWjSzyDAaOgJpYdP2qzkGjaKtONTXuDfmTdPWEP5PA0d3rjapOoXqxC81P4xNKOj8Mflqp0h5wwJ7wW4XaQrW6zU32usWvrU2uBIALS4XgREYiUk4J7QSSPH7KedeiEIQqamq84xqPf2O20wOxz/auEqgA6uyqF33GOYqUjtYfM7bG/wC2vhK7htH0j/YsDFfPdx+gXreTyPZ2cPqUzapKx5KNapOxZJNXRXm/Eo63uPKvBkUy2mKpGYbzv4SczsUw0AARERhGUaoWoNaXHwS4gB2IJIE4EdZ7Vso0g0BrRAGQ2BMxFcVKbGwQWgcD0QJO2bRMXbsEXVQolj3OsZJ4i5McLydzpMmbRulX3nCmL/NF+Wtc6H5U5ujbJ7E+slflGNftGI2EYEdRkLNlIAkgYuMk7SBHoQymGzdESST0nMoq16b6LaQB6Ohtt+K2yTprYAFFOm9tQvJF5kX2fD4aiNSSorSRIqnMM5NvKEeEGX3TG7adQlS1MANAbEQIjKNUJOTF4ujEiCdwkx5yijTDAGtEAZDUOhFfENq0mMAILY4G0EnrEQDuMECJJTouZUc43B8L2A6jrGoN76BhpV14tpc6IL3FjXOIjBngjxsf1E6sNo5Sm1xwOThlDhg4R0hbGsaCXAYuiTtjJKykBMCJMnedvmXKmIpuoNpAHo3Btqfjt1m03JDWyBeBlF4qmoSL6jqHw915G9zoNkzay9aHXoJaxvJg7DN4gbZgSik0NtDgzAGnLwMr17mncSJTm02Zj4vtmMjiCOgjEIs9nawQxoAzO0naTmVN2KZzZu6cgZl/lsBfXeM0ZfjJOY7Ytw7s4sPiLpvmvNojccoM/CIiVxmlPfqnyz9YqZrkikHU/fhQZ0ilz5LN857lC6U9+q/Ld9YrEWt4LXBxBYLrThgBOG/M5r2tbDurU6cRa99DbQ9R0PVv0PkqeKbRqVZnpEiRqLm46wLjr3ahdF+/U/0jfSEmkj36p8t31itQqm9enGb0wM5mYyzWy1Wx9SL7r0ZYAZ9AVgsfzwfaMsG99Zta/eFUFRvMc3ec0iwjSL3tv0Kl9B07jDUNznm5z3Bvex4ZE54wIURbrMab3MPwTHSMwesQsKtZzw0OMhohuWAS167nwXGSABqyGXSl0aFRlZ1QkdLUXtBhsbLCxsL3TK1em+i2k1p6Oh3z8UjZJja625TDn8uwgOeyoylz2GbhY0ZjZmMD/lMNE2rk3l10kXSHEZhp1g6owSP0pWc24Xy2IOAkjYXRJ7Vps1ofTN6m4tOWrLYQcClswrhSfTcBB0EmI29LKDwsS3SSICbUxbXVWVGl0jUwJO7o5i2d8EZtwTrSlKLjhUc+m5pLC6bwAOIPWSnTKzG2ehffVZIqRycQef8ACx+2Ki7VaX1DNR0kCBkIG4DALbQ0lWY2418NE4Q054nMIfh6r6TGmCWuk3jY5uoYb9IScozXJAJtyniabKz3AGC2BadrToXi3RMAPMSACQLsnZJjVKfOyTCorlRUmLJvV/Eum4uKU6UsYy74Ts8Gm86yNm3qOR5djt+zWfUuw4r/AP5WzY/Cfr/0am1wnz9BSX/LdwPkp7V6QQhCw05cDxlDnUT8V+7IjXG/7a+ErP8AjH6RvrC73jNHvH7T+Td61wVed/8AtFYONH67uzyC9XyZ/DM7f+RTFq0u0rVFUUaNMPeYEXS8uccQ0NGeC2tUpoRjKDa1oLrj6t4co17GVadlpsaKhs7ni7y73XgBndovIxCvcmUaVSsRUbmtYHSZA8ASfzEr5Wr1KNEOpmCTE9hPmAtek+DdnotbaKtRtmJdFSzvZVrMp1PCLG17NeNPDENdzhrkJ3pa2Um0G16EhtSq2iw1XC61rb4fWqmAec5jwBGDabnHE3QU7W4Ov0xdeH3LLZaQFJ7q0PuWi02KpzSHsIvVGxEThm2L4REGy0qALXGpX5rm4MfyfKipUbsY60Wqs1uotpSF6SpRZiC0Vhmg7bwDrYie0m9wV5ShXfQnmjlndaY4KXboS28o+m6pZG3Xsptc5zgyrVq0xVbTpmJLrpBxAz1rRT0ZbjSvn3O1901ORcSKwpNfybqpGQaHb8uxSLtK2m+6pVsVJ7W1aVen+Ehop16NA0w++G98BZSLru7M6m1ptdsfSeypZaZtLrO+zmvywE2eseVcwUfBLoOd7KdhVQYGhtp09mxv3/O6yte8cV/cd67FH6ep2qyXuVNGOaGQ2oL7nFwLQHQW3QwuJIiHU48MKDHCOoDi1hGyCPPOCm7XaH2ayup1LNTNMsFNjnVGGoHvbVa95aWuc6agc8XSwjkKYkhsLilZpcnYRwM0mnrgX7tFE8pYsG1QrvrLXFRjXjJwno2jtWyVH6B/8en0O+s5P14bE0xTrPpt0a5wHAEhe1w1Q1KLHnUtB7wChCEKs7RPC4jSnv1T5bvrFNE60n79U+W76xTZfUaXy28AvnNf5r+J8ykSpUQmJKRCEIXUIQhCEiVCRC6kdkmFRPn5JjUS36LrUjHY57NYGpdpxVO/Gtmx8prz70/4wnz9GscW32bNi7Timd+NbPj5TXE96f8AGE+fo1hL/lu4FT2r0ahCFiJy4XjLHvH7T+Tcq+tLPif7Y9qsTjKGFD9p/Iq4tjR4o+jf7VhYz557PIL1fJn8K3t8ymrVOWez03tYTarIGtDL9KrUDyS01SWvsr3spOHfQ4Oc4EHJQbE0tmhnveX04MxIJgggR2YBXuTKlNlY844NBGp01BidiVyxRqVqIFNpJBmBugjYuit2krJQa4Ormu4tuOFOo6rWq0xlSqWsgNoUdRp0QSfGKjbLUs9q7/Xtfue0B92kxsMpUqVM0W07kCWBt95ABk3CcwZTQ1nr2dldnJNfyzLl6+1r6eDheYYMO52e7epO06Qe+m+l7ipNa9tNhuVg03KRN0B10xLCGOOsDVOG97bhW6VW8c7PImPvG6F5v2DFbaTv8StFZtkP/wClVcw34dyvODC0FjDRc0FxhxDnSACC2AsgyySQNK1Wg5k1MC8sY2n4IJcLzjJgQ1jhh4SeHTNa8X+5KILqjajmiqBTc5po4lhaTIFAXTPNL3mHTCxtOl6z5izBksrs5loaMbQ4OLyOTxcII65F0gRAY7D/AN1v+bPyu+wYn+07/FyjX2ex1IZWt1QgvBnlm1Gx3jG5cwd36vrw5MmMSsqOhNGE8+1ubziObVpuujk6ZAvcmL3PdUF4AN5mrNO7VpGq6nWpiyU2iq14nlhIdVqVqri6Gi+0OruLW4XbokuXLt4PVicbo33h6lNuNwxEGs0cHNPkj2DFf2nf4lTfB/8A8el1/WKkFqsdnFNjWDUInadZ7U4FFxxDSeorxWJeKtepUboXOI4EkheypObh6NOnUcAQ0DuABWCFu9zO8U9h9icV7IwNFzlC7XLIaNsaykGm4hdONoA/EFXOk/fqny3fWKbgLsX8GWOLnu5QOJJiMMZOxa2cFWk48oBHTj83Je4p8tYUNAOawGxeQq4Co57nBzbknXeZXJpV0Ffgo8eASdxaR5/8KItWjqlMw5s9GKvUMfhq1mPE7jY9xj7dapVMNVYbieF/ESO9NCkQUK4khIUqRCF1CEIQhYvyTGonz8kxqJb1NqAN2zUNi7HikP41s/7Xd+RfvE9GPRrHGx9oK6/imMaWs37Td+Rqb0ip8t3Aqe1ekkIQsVNXEcZWVH9f+VVpa3jdntqKzeMrwaPS/wDlVX2up8fX5U+xYmK+eezyC9Vyb/Ct7fMrUxSliyUWxStiyVarotFuqcoQhVpTEgCClSNaSYAk9gG8k5BdALjAXHENElYlYuqDKcdnSpGjYaTXDl6hOB5lObxOUQJJGez1rc1obzqTadKm34T3A1SZjwWg4dUlXGYSfiPYFSfjL2Ft5UdZtGV3l188mG45YxE56pG0j1Kz+ClQCxUnEgANcSTgAA50knUqur2xxcLzWvMTL5gCcIBN0ZTgPYrA0bY6tSxWUUnsbcqB7w9pcx7GufLSAQZBLXjewLRwjGtqQLCD5hYnKbnENzXUhaeFdkpuDKla5MQ5zKjacOwB5UtuQTrmFOqm7Fb32ynarJzRVtlrqd+qnvYp0hRIpt1vqNEXWYCCMV2do0uLPVq02VHPFksJqGiW3Q8sAIc6oW+KABdkc50wRjtVKBbAEz+wnqva+66xGvm+xdgTGaxe8AEkwBiScAANZVct01aHu0RfqBor8pWqRhLmsJaC50i6eUiIwORwEM9G0qtus9ovmobSKFenVokPDTWe4OaKheAxl2GimxuQBJOJjnszgJcbfkjutrwC7nBMD1ofqrSZUByIOrAziqAtdeLTBDSMMxOpW/wI0Q2zWWmOQbRquYzl4ulz6jGhpc4twJMEx8Y65VNW9pNpIGcCNWr0LLxoGcDWzvpxWlyeelPBJWoUqkh2c+GLzT0Yz50ytfB57TzThqvYT2TtHanb7FUGGJ3YEZeb7ZLULE4mBs1nDz9OaXQxlWhanUtuNx2buyFrV8FRrGXsvvFj+e2VEWiwvYJc3A6wQ4doOHWmy6kMNP4WOs5gDOcROCaVxRqEy3HHEEA6swBzv8rUoctH/wArO1v2P/1wCy6/I5F6buw/ca93aoFC2V2tDi1rg4D7Qd61rbpVG1GB7dCsZ7Cxxa7ULF+SY1E+fkmNRD11qOztK6riqP42snyqm3yFRctOGf8AF6l1HFcPxrZPlv3/AJGruSavy3cD5KY1XpdCELETVxPGWeZS+U/0N3+r/NX2txnM5+PTVocZx73S+U70Df6usa6ttDTOR+ZTWNih+uezyC9TyZ/DN7fMrCmpaxZKKYpWx5KpW0Wk3Vb0IQqqYtdSqAWtxJJwASi1uaHtosvkzeePi5Bv225Jh7tF9zecSZbDcSIwy6vOntm0NUc0mtUDaYiWicgDHN3AxjitSjRDG31Ko1nZzbYo0220OeIJZGQbBcATIBcerrjBSVg0ZXcIFDmugmpUBLzOcOJA/wDVSljtNjs7OU5rWAZnwnHWRhJiBiBjqTS1cN7MCLpqVCRBukjoxIz29CtBpIgBUn1WtN/E/mVuHBd7zL6ghowgA5CYDBF0Zb1YXB62MpWClUeYAByBLibzoa1oxc46gMSqq0jw6NW5Rp0iyD4RdLonUYB7Jld3b9M1bJomnWoNBdeDS4tLm02l7pqOaMwIjpcE/D0i6uG7x9QszH1S5gJ2T69ErmbBwVtT9FVmvovp2llp900hgHOBpsaQ2DIdzXEDOQ1SnB62WW1vfa69qZTfUs/ue00HllOTF1zg5xkNOeGIOBOBC3WzhdWZZbPUp2qzVDVtHIurcm5tNjC2ZqMc4Frhg4zGBy1qMbp8VmT7jsde1vtRs9KvyTTSddAPKyZcYvN15OB3HdPOPBzDabjZv1Glh1jVY4gaHZ69bV0GjaNMto0rHRpWllBxNKtVc+pTZJ8JtdzYLsBDaYcBdAluBUhaLFXePwmg+0k5tp1msoY5jk3Fkj5d8jaotunrbZKws9r5GpytGq+hUpNLQH0aZeWvadUDdq2mGHBnhhbbTUZRDrPUdWoVHyxj/wAGqNDrnLC8ZBIAjPnDLXXNN5BeIjWZ7zNtx3cF0ObopfgPwVqWWtaK7g2iyrgyz03FzWNBkOc7Iu2RgJOOoVJpu0Btpd0DDM5bFcHAbStstL65tD6Jp0qtShDGOa41aZYb0lxF2CcM1S3CGifdTzhi1voVDGy6uM5BMHT/AGrQ5PJHwD1f6pKWlahvCSJOZEmN5WNTSxaC1rjeIxM4RnGck57UxquaBiZwyyn2pjUeI5vZ7UhtJp2LRq4p7BE+vX7J3W02+45gLsRBMx5gmdOq92ExOZ3La1uAkARGQk9a3NVzD4fnHZWCN53et37rPr1njpVHHhpP16ide9JTYAICVCF6BjAxoa3QLKcSTJWL8kxqJ8/JMai49Sasm6va1dZxYs/Glk+W/f8AkamwH7bMxytJv2gLsuLWn+MrLh8N2r/SfsB+2sZhNX4HcD5KY1XopCELETVw/Gie80vlu+r0+rrGurarPi6/JH2qy+NSvzaNOMy98zhzQ1sRPx9irOoBu7Kix8Wf1j2eS9PyYP8ATjt80rFKWPJRTFK2PJU63wrTbqnC1VrS1mLitqhtJcHxWqF/KvbMYDKQIw7Eqk2mT+oYHCVyu6q1s0hJ7PqmlXTAoGabMXEkvdhEmQAo93Cau50l+BjmXWkEg5G8DIGeK2aR0cxjhTNQgAAguEz1N6+xNG0qDY5So4z4obHSt2mGFocBM8ViYg1y+JAA6wIPZG3fPWtNs0jXrzylTAwdUa4iOtaqVa6O9tkjNx9Q1rc6vZxF1p3lxdJO0ARHnQ62UwRdaNeeXRjvTuqFUaADmNQTpMyey0DunrWiyl99pzlwkkbwvRWj7DWrWCi2haHWZ4JcHtY2pMOeLrmuwIxnqC890tJEuAZzZc2cccxMbF6H4NaYs9Oy02PrMa4AyCYI5xK4H5KrSYFjrG8b1WrBpbDST62bVH2fgAwMptfWNRwtQtdVxptDarogsuAwxpxwxzOrAS/CDgxStVFlNp5B1N4qUX0wGmm8awBGG7DUcwn3d+y+Xp/OCO79l8vT+cFYOKJIOcSOseurhbRVebtEea5+w8C38o6va7W+01uSfSpuLBTbSbUaWkhgJl0E4yMz0rZoDgV7kq0qlGuRdpclWbcF2uASWuIvc1wmJxy3mZzu/ZfL0/nBHd+y+Xp/OC6cWSCC4X4R6/fVcFKNh8Vo4OaDFkFcB5fy1epXxEXTUu83MzF3NedOFzj7peA4jBuHUvSXd+y+Xp/OC838KmNNqcXGMG9eG1Vn1A+q0zNjpxarFJpykaaa23qGbRyJkbtfacAttlzutxOs7ANiyqgvN0ZfbWpTR9jIOA+wUnOgXXK1VlC418/tx8kWHRpJk5apyG9O7Tom9iwtwGIEgHt1qXsYbgKjTgMmn7elSjGsODXXBGV0zHTkktxb6TszHQfWu9ZZqPquzEqva1ItMOEFYLtdK6IbUloN4jEOaMumFx9eiWOLXCCM16DAY4YlpBs4aj6jq8u6ZLQ/JMnp6/JMnq49MatlBmOWz4Mrt+Ldn4xs2Hw3av8ATfqg/bWMxxNnz1avGXbcXzot9mMT3yO1rhOIOUzlqzGYr1PgPApgXoRCELGTFXfGtnZ/2v8Ax7/Uq7qu3j6R/sVjca+Vn/a/8arys7LnH6RvsWLjPnH1sXquS7YVvb5lamKTseSjWKTsWSq1fhWg3VOEIQqqco3TmjjVaC2Lw1HCRsnUuKttiuOuuaWOjWM/UepWOtdppMeIe0OG8T/0r+GxrqQykSPH7LOxmAbX6QMHw+47FWBZqmfMUCmYyK6bSegGTNJ134pxHUcx51E1dEVBv6/athmIY8WPevO1MHUpmCJ4X+58FHtYfP1p821VQffKp/aOP8y1OsFTxT2hILM/xXehTJa7WPBLa1zdh9di3st1SZNap0X3kelOPd9SJNZ8bnu9qZNs7vEPWP8AKX3I8fBz6MPOoZafV4JjXOA08/XknD9JVNVWof13YedL3Tq66jxPx3e1MSLsjXt1+lYB27rOKaMNOjUs4iNqkKFsrucGCo+TPw3YAYkkzgAMUVLI9zu+OLvjYuJjbOKe2KgabBOD6gl2GLKQF4DpODjt5owMpw5hHNjEFwmc4JHmLXY7neKoZQ02jsXZLhdJo2wMOF9k6pIbPbCmXXKYvFzWEZgmJ24hQT2CCdWOYIw1SN+KjWhpvEgQcBgJEfCBUDSDj0iY7FSqYTMZzEnrXV1dLWZsOvlx1hokdEmB51otPCoZUqLQNrnEk9Qy7VCUNHUj+Uk3S6MstWycDrT+ho2lBMOMAnKBhI1gycvtlYbTwbdWl3E2+n1Q3Cu6lieENUuvQwfJvCOg35RpHSLK7QXMuVBk4Yhw2Oj0wVlXsdM4RdbqkiQDkcMQY1Rq6Aoy2aPeySDfaNY3ayNm8eZW8OcIXAtbkdsg+gZ3EKL6DmX1C0PyTF6cGpgmzitVxlLat1ndj2ayu24vxNus2vvg35AnYftszHE2c457NYXbcXp/D7N+k6fglIqfCeBTQvQqEIWMmKveNb/64/SfyKva87/9tWBxp+HQHxX+lqr+0s+Lr8mPasPFn9cjh5Bes5MH+kb2/wDIrUxSljyUWxSljyVerorzdVnaKwY0vMw0SYzUb90VD4/YPapOtSD2lrhIIg6sFF2zRdmp03PNMYDDnvxOQGe1WMCMG4Za7XlxIAyxtgbSLkqtjDi29KiWBoEnNPXuBtCxPCClqv8AYPanlotgY0udgB9oUDwbsd+peOTMelxy9Z6gtmlahrVhQp5AwTqvaz0AT51q1uTcN7WKNOQGjM8k6D6GPAzsWVS5QxBwvPPiXHKwAanv3+XWtndBj3ANmTtCycxMbLRDbWKYyD3AdQKlNJBwfTpsIBfPOImI3LmLwjGVmU6NgW5rnQCSSbbANIKKFd76T31dWuy232AGu0nWyZuprA0lvovjlRUIPJ5uGuZ8+C2Wag67LszjGwHIKvUpupA5iLQB1yA63+0gmYiQNSpsy1CMo39kGL9oIG+CdAmnJJOSUjyKx5FV+dTeYXI2pvPd8o+lOtE2QOcXuEtZq8Z3wW9Gs7hvC125nfH/ACnekqRsmkrlFrLjSA52MQ6XQZLhicIGPir0taWUAR1DwXmwAapB3nzTl+MOJxcecTA5xMjHxZunXm7OBOktJ5xkk5/KLnBrY2nPr6UrbbTdtb5/OsbXaWsbLHBxJ1SIwOJ25ntKzArabWx+HJjLwnHXiPBlNHOWoVjjOvE9K2UnAnPHUFKIUJlOKcs1xlPqSWi2OmJBjLXs29XYm9pcYmJ2D1rECVwBBJ0Wz3Q7xj1YehAqYytcLItXVwSsajIlNXJ8/I/bUmb1t0K3O083YqZZkdC2Uc+zxV2fF6fw+zfpBs2FcVT1YfwhdhxeujSFl1d8G7MEbftvyUqnwngV0L0ahCFjJirrjN99o/IP1uj19muvbY0bBn4j13/GV7/T/R/zu1x6z0DXwFqInVntqFYWI+e7j9AvXYD+FZw+pWDFK2PJRlNSVkySKuiut1Tlc1wptkkUhk3nO6SMB2Y9YXSFRbdCN5TlHOc43rxBiJzHVl2KzyVXw+Hrc9XPwjoiDc+Q7dpCqcp0a9ejzVH+Y3O4fWd20SEtnszqNmIaO+BpOAk3z6YwHUoPR9O0UiXMoukiJLHHDd9tS7CEQpUOV3U21A9jXZzLp8uA2KNbktr3Uyx7m5BDYi3Xxiy4dtWoK98Dvl4mIPhGZF3tXWPszatNvLNnmgnNpDiBOWI6Fpp6HaK3L3zevF0YRjOHnTytWjmgEugQbri284wJIGo57la5Qx7MS+mMLZzQLiQQf6Rtyjfx3qvgMC6g2pz92uOhggjeRe52jqUVUo02kta2KVLn1IxLn/BbJOO1LRt5LmB9IsFTwHXgZ2SNWrtT6jYQKZpOM3pL3ay52Jd2+gJvZ9EkOYX1XPFPwG3Q0Dp26uxROLwlRrhUdJEgE5yXW+IRaXPuc+jIaNIUvZsS1zebbAMSBlgXFiDeAzTJq+SbFOTRWBop7CS6sfnbLSNESuD0izvr/lu9JWQqSwMgAAzhmTtJWek/fqvy3fWKagr6BVw3PUWgawI7oXgi/JXdxPmUj7OcwtNVrgMcE7FocNQPmTa01b0YRnM+nzLLfhq1P4mp4qU3aFaQVt5MAXxgR1grGtZiGh0yHTHVrwSUKT3c1oJ19G87EU6ObpbNq458Wi6S/LgThJA3YlOnM2f5WqyWd1R11sTnjlgt1rswaJbWa/aAQDvMAmfTuRUoBr8uYeKGVJbmhaQwwZGYMJC8CNfnWgpU5uDnUqBr7gszUAECf8rQ4rMjBanK/RpCm2AlF5cZKzpjd5ius4vnRpCy6u+t3ZztI+2o5Hk2dX8S6ji/d+MLLj+Wbr24Zkj09RyM6g6B4FAXpdCELETVWPGWfwhn6Nu74T9ces9S4as+T4WvyvsC7bjGdetUeLTaNW1x2b9/qHHGZzPz6YWBiT+s7ivYYEf6ZnBaWBSdkyUe0KQsuSTV0VtuqcqBfZzyry2m/lOWaWvghoZAvSciM1OymTjWvOObZkAETDZbGIETzXZnI9Cscn1jTzwQJG10TfTrG8GARqUjF0mvyyCYOwTFteo7iLzptUTXsrpZLCRytcmabnCCRHN36inumqFRz28mD4NS9GsGObe+CSAYW9tOtDwXYwy6ZGY8KN2ucDisKlKviA+cWwcBgGQcNt7UVojFZqrHZ2dDNEkkHPB3bM1wTfKYi6oHDtDHDI/pFpMCCMtht/8AXUDbcmRDDSNmvlpZScGii0eA68zvmN0a3j0St+kOUNXlG03kUrt2TdnW+AcXSDGGxSNnD77r2WMYjGXuIy2NLR1JzeVZ/KRpuaMocGggdIuEOib2JJAgnrMiZCsDANeCZImJsBdsxAIIABMi2wQYhRNOw3nV3OYCCXRLTeOAIIOyRlGab07K9op3GFrvc75wPvjgMzqcYU7KEscrVt1rWJMWaW6bd/gmnk+nrob3Avd2bXZfRQNOlg8UqRaDRcHS17XXruRnB7idcFSGhWXaUXbuOIuGnjA1HPpT5IoYrlF1ekWEax/MSbb518OubkyoYJtJ4cDpOwAX3Rp49UCy4jSfv1T5bvrFNU50me/VPlu+sU1le9pfLbwC8LX+a7ifMpUjmyiUqYlLSbPsT622xrabadMiCG3oEF0CSXHVJ+D0zKbpC0KnXwbasRaOrVMZVLJhN2oFIJxcSXU/mgdUuTsWrk0nJpwAhSyBF03LVpeE9cEzqKLhAUmJGnf/ABQuk4BPjSNkx/LM17TETI6InXk7I863V0bQpzgTVu6QshmO/wBMZgeE4NzDm7dvU7wTB46B4HyU16gQhCwk5V3wq4OWiraKlVoaWOu3SXNGAY1pkE7QVzzuDFVp5xpN66fqBVt2yi2o264SOkj0KGqcFrK7Og09Mn0lVHYKk5xcZv1rRp8qV6bAxsQBGn5VR26g+k6HMLh4zC148xkdYCwGkwBAaetWlaOAdgfnZm/quez6rgmZ4sNHeRf1V64/nUHYCmd6a3littA7LfdVx3UOxHdTcrH+9ho3yNT6e0f3FkOLLRw/I1Pp6/8AWo+72b1McsP3eKrxtpqGIpuxEjDUcih1pqCSabsJJwOAGastvACwiByTsMu+1dX6yz+4OxeTf9NV6PG3qXu+l1pfvivuHj91VXdXcjuruVmHi10f5Or9PX/uI+9ro/ydX94tH9xQ93tTvfB6/BVn3U3I7qblZn3tdH+Tq/vFf+4g8WWjjnSqnptFoP8AyLvu9qDyw7rVZ91NyO6m5WaOLTR3kX4Zd+rT9dKOLXR/kn/TVv60e7mb/D8qPvh+7xVBaQtJNV5j4bvSU290HYvQo4s9HY95fjn36tj089Zfe00d5J/01bX+ut1uNc1oAGnrcsRzA5xcdpnv7V5590HYj3Qdi9BDiv0bqpVN/f6/9xH3r9HZclU/eLR/cXfbnbvXco80N/rvXn3ljsKXlzsXoD71+jvJVP3i0f3EHiu0b5Kp+8Wj+4j25+713LvNN3+u9efuXOxHLnYvQX3r9HeSqfvFo/uJDxWaNOdF/wBPX/rR7e/d4/hc5oev3Xn7lzsRyzti9Afeq0Z5B/01f+tH3qtGeQf9NX/rXfbnbkc0FQTax2JzZdFV6xhlF8H4TrrGxtvOInqlXs3it0aPyD/p6/8AWn9m4B2Gn4ND5z6r/rOKicc8jQLopgKl6XAS1OAh1A/tB62KW4PcX9vp2qz1uTYWsrU3uLarMGteC7C8CcJyVxM4N2YZUWjokKQslkZTEMbHWT6SoHGVSIMIyBOZQiUKqpohEJUIQsbqLqyQhCxuourJCEJISXVkhCEkIhKhCEkJLqyQhCxupYSoQhJCISoQhJCISoQhJCISoQhJCISoQhJCISoQhJCISoQhJCISoQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhf/9k=',
      currency: 'EUR',
      prices: [
        {
          price: 1.39,
          shop: 'Ritter-Sport',
          link: 'https://example.com/rs-kraeftig-rs',
          unit: 'g',
          amount: 100,
        },
        {
          price: 1.49,
          shop: 'Amazon',
          link: 'https://example.com/rs-kraeftig-am',
          unit: 'g',
          amount: 100,
        },
        {
          price: 2.99,
          shop: 'REWE',
          link: 'https://example.com/rs-kraeftig-re',
          unit: 'g',
          amount: 200,
        },
        {
          price: 9.99,
          shop: 'Edeka',
          link: 'https://example.com/rs-kraeftig-ed',
          unit: 'kg',
          amount: 1,
        },
        {
          price: 0.99,
          shop: 'DM',
          link: 'https://example.com/rs-kraeftig-dm',
          unit: 'g',
          amount: 50,
        },
      ],
      nutrition: {
        fat: {
          total: 50,
          saturated: 32,
        },
        carbohydrates: {
          total: 27,
          sugar: 24,
        },
        protein: 7,
        salt: 0.9,
      },
    },
    {
      id: '4',
      name: 'Salted Caramel',
      brand: 'Milka',
      image:
        'https://www.milka.at/~/media/Project/Brands/Milka/de/All-Products/milka-peanut-caramel/Thumbnails/pl-hd.png',
      currency: 'EUR',
      prices: [
        {
          price: 1.19,
          shop: 'Milka',
          link: 'https://example.com/mi-salted-mi',
          unit: 'g',
          amount: 100,
        },
        {
          price: 0.99,
          shop: 'REWE',
          link: 'https://example.com/mi-salted-re',
          unit: 'kg',
          amount: 0.1,
        },
        {
          price: 4.99,
          shop: 'Edeka',
          link: 'https://example.com/mi-salted-ed',
          unit: 'kg',
          amount: 0.5,
        },
        {
          price: 1.19,
          shop: 'DM',
          link: 'https://example.com/mi-salted-dm',
          unit: 'g',
          amount: 120,
        },
      ],
      nutrition: {
        fat: {
          total: 45,
          saturated: 40,
        },
        carbohydrates: {
          total: 38,
          sugar: 36,
        },
        protein: 3,
        salt: 4.2,
      },
    },
    {
      id: '5',
      name: 'Dark Milk',
      brand: 'Milka',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2o0JQ45hV0HPp8KlSs2UJN9rnJx94xnM1dA&usqp=CAU',
      currency: 'EUR',
      prices: [
        {
          price: 1.19,
          shop: 'Milka',
          link: 'https://example.com/mi-dark-mi',
          unit: 'g',
          amount: 80,
        },
        {
          price: 1.19,
          shop: 'REWE',
          link: 'https://example.com/mi-dark-re',
          unit: 'kg',
          amount: 0.1,
        },
        {
          price: 3.49,
          shop: 'Edeka',
          link: 'https://example.com/mi-dark-ed',
          unit: 'kg',
          amount: 0.24,
        },
        {
          price: 0.89,
          shop: 'DM',
          link: 'https://example.com/mi-dark-dm',
          unit: 'g',
          amount: 80,
        },
      ],
      nutrition: {
        fat: {
          total: 40,
          saturated: 38,
        },
        carbohydrates: {
          total: 36,
          sugar: 30,
        },
        protein: 6,
        salt: 1.2,
      },
    },
    {
      id: '6',
      name: 'Weiße Schokolade',
      brand: 'Milka',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ268B3gOF2w7Tf5j1bqcYIOo6IzBPMh3nZUA&usqp=CAU',
      currency: 'EUR',
      prices: [
        {
          price: 1.19,
          shop: 'Milka',
          link: 'https://example.com/mi-weiss-mi',
          unit: 'g',
          amount: 150,
        },
        {
          price: 7.49,
          shop: 'REWE',
          link: 'https://example.com/mi-weiss-re',
          unit: 'kg',
          amount: 1,
        },
        {
          price: 0.99,
          shop: 'Edeka',
          link: 'https://example.com/mi-weiss-ed',
          unit: 'kg',
          amount: 0.15,
        },
      ],
      nutrition: {
        fat: {
          total: 75,
          saturated: 62,
        },
        carbohydrates: {
          total: 55,
          sugar: 48,
        },
        protein: 2,
        salt: 2.1,
      },
    },
    {
      id: '7',
      name: 'Vegan Haselnuss',
      brand: 'Lindt',
      image:
        'data:image/jpeg;base64,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',
      currency: 'EUR',
      prices: [
        {
          price: 2.99,
          shop: 'Lindt',
          link: 'https://example.com/li-haselnuss-li',
          unit: 'g',
          amount: 90,
        },
        {
          price: 2.89,
          shop: 'Amazon',
          link: 'https://example.com/li-haselnuss-am',
          unit: 'g',
          amount: 90,
        },
        {
          price: 2.49,
          shop: 'REWE',
          link: 'https://example.com/li-haselnuss-re',
          unit: 'kg',
          amount: 0.09,
        },
        {
          price: 5.99,
          shop: 'Edeka',
          link: 'https://example.com/li-haselnuss-ed',
          unit: 'kg',
          amount: 0.2,
        },
        {
          price: 2.79,
          shop: 'DM',
          link: 'https://example.com/li-haselnuss-dm',
          unit: 'g',
          amount: 90,
        },
      ],
      nutrition: {
        fat: {
          total: 37,
          saturated: 16,
        },
        carbohydrates: {
          total: 54,
          sugar: 38,
        },
        protein: 5,
        salt: 1.4,
      },
    },
    {
      id: '8',
      name: 'EXCELLENCE 99%',
      brand: 'Lindt',
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB7FBMVEX///8DAwMAAAD///3//v/k5OQAAAT///t5eXnV1dXm17dubm7WyZvIsGkAAAZqThG0jTDq6uo7Kgrx8fEDBADj2LRgYGD///hlZWUAAAv///T28d/6///4+Pjv7++rfgC2traMjIy0fwCqfQAKAAAsDQsODA0YAACBgYHJycmIiIgpKSmYmJj58OL9+u3Suoe9mknv5s3azJXAoFjs5MPMuXzOvZfDr3iyhh+ieinJiQnHhgvBjivHjiEcDwhkTyWMbC9tUR8jDQwyDQAyDg8yIx8aEhVLS0smJiY1NTWmpqa+vr5WPgDn5Ni8p2LIplTStmvBmlv9/eTUu5XKqlDEupWodACzlDHWtICykESphg6+pWnb1r6skzTv266ohSrRsGbhzYn27sTFokS/q2CmjB3FuoerkVH499bavonUwqe7r4etijXPsHbb1aezgB0oHAuleSNJMQyMZRsnFgZUNxhdPxWMbhp8VRw6MBGocR1FJwaNczloWC83LiF/aSduSht+XzJIPA83Ig4gHAtfTTcVEwCcaRtjUiBKOB90UiuIYy98WBEtKRFiTzFYSROMdzN6TB1PQDNbLxVhQT5HGg1BIxtrRDJwNxmJV0FIFQmbcFtSHwlvPSuxi3h9XlBpKwBJLipbMyY9QD8iZVrhAAAcLElEQVR4nO2di18TV/bAb+6MMxDDEGLimEwwGsagVSaZPMjDTB5QELQQV62ugEiLS4sLhhBFdOsDY8UA0q4Fbbd1Xew/+jt3JsGAQenvU5aJ62mbZF70fnPOPa87SRD6JJ/kk3wM0nRq/1Zy4B3ZW7d92du022gl2YN3Sup3G60kTRgbdkJqlPCPvBm1SfhHRDeEBz96wn3/E4Q7wqgrwh0RfRBSiN33ccdDikX7vmjcGfmib7fpiNAskhp2SAbbdpuOCE0hut20M9Iu7Tbdny6UavU1IxRI+Zkqb7z/dBC2xggp9IcIaeSA/2pG/h+EbbZ+ky68yweEppGmCJZCoBIwO4eDRVWsTz2LJWfBURYITZmzIyb9T0XW6USSbLthkyWWZlkna/MF/mKsRggoLA1C0bSTpSmeFnxnfQK8Q/q2VBiz0RcJeE3t3vCXDtop+3I29lygGiELWOTRCQqkaZ6n0Lg5RMHODxj0Lgsv9beYBFZ1/eAYjS2+c05k8tNVRg27gqbrEssbyaMDpuL5C17A5f/7o962wLtPBQZkMsVYmI00ZWoJSCwVvCLRaKNmNGI5crHfgWwtF72s9GVQRqaMF8nBLyXVr+pRiMM0XrSVNlgn5XX5HKxTuCpXO5elpCtun+QMtrgHWXQ9dOkrb+jSX71fXTp7nZitLk2V5CQNZlZ7+8GPmC5eEmjnucvBd0+F2eak+t0Dbeic2WWWwCUJpvP9/pC//3y7zBMnrEtCMEtq0Efx6uCc6EaLS6bZtst+07s6pCBlN7W4jMgRcEWCTpqGaIEE71WvgCjJOKTX1IYGvXldDkRcBU2D9UFwk68Mm12B0gmVenEGXS4vQuOuFhvw8sKQ0S/bRuA1uGIBgHdh/NuTc1dDiLh+Voi4wkjyXpPG3C1G0BiEOaeadtJq/gnW6Q5Ikq3FPS5JAns9HBofGc2cvWIzXRmZPAfvkU61CCIEAl+THOayy/z12DfDLOprkNXREs2yKhwRR8BtPvflFbd74logMCjR58b84XbbZCbUYA74h+gPZnm7J5DEBMP9/ecDLlfgfNCBBJNpyEnBY59kC9sQ70BOwTbYH/S6XTJy+NxXJNUpQeLGsnL7hYlh38hIQNazlarmxfPDLlcDxHAnf9k98C3L+9zmr/qDIxchFWibdLVMfm12ufyIb3C1yMAH0Y/39iGh3TZwITTq89tYLd3Rl0BId2pJN7HDtqtucxuME026XDYnDY+j51l/i6sNBc3uSBAF3RADnSa3y6Rm3YgVfF/J/pCQGRgNjV8TdJm4kWyLJbkMADodl92uIIl5flAVS3ndbtcwGna5Q8g24LokUMKEe0JAQbKDZ0n5QfE277WMTxo2j4zJgi46UO8IRApKTUXIgMNuCAFgrcAwyFKmARcEvmDEHeCFAfelNicfANN1nou4L7OsgycxBi7i5YYGv2l8ULIJzt2GqSqU0+kQZAG8qJP3tlwNQrXA2iLuiXOUd8A98DWSB9wTkjThNgtOx6ALUrtzgCkguY+kQGCUkHkL45Fxb4MXVLnbMFWFlsJ/c128CHWT7B2YlEAN58YGXAMCG4q4BoxIirgibcIV4kClgJtEyn6X24iGrkla/4lYgODzhUJhbwhqRD3OQ9TuZyXBlnG1tLgyQeHboPcbk9k99O3gCPgahEzugeCNQX9LOwr2h1wBh3HwbIsJmcJsub9B80Fbv2TzjY/7Rm2sLoOFHB673h7q7/dPmlsuXmzxmc5RlyPe8PDVAS+4IeNF8zUT5DkN4bDUFgkMhnhjy/l+E/uWsDnsG2MdXt9Iw/g3vA4JSa0kCUKbgyJFsCA44ImWZIFiJYjxxASDEvhNSW4Dq5QEKCZo2ENCfYmQpeEq4IVjbYIudUirbpRUferEIq6VRDVSyZJdPDnDSatTjoxea0CRE0qNOJLMaSUTRFFWO0kfmCyl+fYNTUNq24K2PJ20qPSASGKZHsaxc0L68DbjDgmvh9BPcs9vzDsjV3QT+VkiFLsuFFXaw0MhTJUP8OtPPBG2QsiZ2tnrp6k7dxtso2xwG+ozafPSZX9YPqj9V+FCyqsbTmf5uJ6lNFqt16bGClRGLLWW1PBQ2Ttd96ha4GCpt2+V7kRb+iM2SZa+SQ2rrsggNXiDOgmtWl3RRL3kCrBEYsVqeU9p6ze02uPQJyGNbOEx79+loX4JRhzuQ075r6HQYEiizof/Dvspr5GMfGjQAYR8ODwWvs5fD1KEzXgdnGYwHA73+3l2LOwNtyM96pFG3gCka5RjwusEWJ42TsgscowJVMOkQwKv6PMTSzRGHGC+vCvISzwytchO0K3pPPx3uQ2x58ISugwJvLSN9cbdEG+YpG5OuaVN6nfQQotM2hmkkTEORupA/RqhmaSirNoEpo1mqBAp1ngeLhLAiTohmw2YnDStV8JJMulYNhQYk0EpPpiJpOxHk34ob1kYOkmAjJcplVAmHasbchgqZCpoQ6EA6fGwPI2u2eBJl4QUGveFw6SykyLjiHeONAAXTZr3kz6Yc5RKCDr0EUI+MhgaFJxGmZqcEJyyEQW8aoMH3oJAwBse0qlD9YZI0wU5hSsTMMcmG9hSaJgkM4tGgWHiaYygLJbo0MHzyBhEfGhACqqERIlwRsDIOxy61CFCITJKlnYEzv1lEjltZjVH4VUrpZ08IQSF2gJqkpMVnJQDmYJksWpi2Ab6551qNkQFbESXuiUkvsXrR8KADGq6obbeWNTgV+N54AZoyGkLkFSAJU4UfKkRgXcJtNicwkAQSmgnT1M+W0UaoDMJN8hBmTVOQMDzXnGwwlWTxEvtAgqQ/Tx7eZw8mcxyMNjW3DIcDAoIQiRYrOQzss7g3244WGlMoibIabokdFJGk6ndxA/JMKEkCIO0ZAuHvEYHbTNdN7XzvM1k8l5nZbIhNMOGaYiWBZoU95JMOhvtoRD4YIfN1t5u0yWhmoESM6PB2WvNb0SSON6hZqQQF51I63DwiKWd6n0MPKW2NViyPupU71XlK4r+3YSpJjTNUySO8arDoNUWk/pShVXrJthLyiSKpdU6iZzOqoQaJKvdSbOxwaEjoSCq01p/hdIaTWqRQQYKkDRJxCmt6qBJcq5m4FoxxapZOkVUr/awaJ3mNNpgKS1npqiNg6S0YFfurKnLwFqrDZWKRfJAztHuh9Ij4CepbanfKWnebbKy7NinEfbsNllZduzTeZ8I/2vyLuGfgqxrwreDZLSn2ifcAsFqhX+tFTsYzlCxaTVwFUA1SQh8jJ2rZGTUf9f5tdccwzB6J9w4tLc8MPCNRzHHrPNyjKGkUcZQRWqCEEY5decZUwZgsGi54ymfjvETbZoasGeDKeufsKwiUKElF4kr2RmiLdjk8kpWUfIJOxy1clO5VC7BABuevoprjxBjq2hl0krMgvMxJY8NosGeiMTyuKDE4gW71WrHOTdW5kGLHI42VnuP9EPYXF2HoLNHSizKcEwkpjzgACQXUwoYL52MRUTOYLcoQKgkOMZuieBKp1oDhLhEiCOx2CxjZXKxk8qUHadjMZfI4GklFksxHGxmcTw2DX442qhzT7OFDq3MtHIyNosNTDp2MpbnCK8bXKkH9ioJBs8CoRJrZDhLnOGqIeqHUPssN36rvRIhMBAdGvAMPEfwlHIS7JIxMFkAnsFlQrzFLNQT4RY6BOsDFCBkLECoPJuGLaJD5uJJUCkGK40AYZorxMXaJIT5lQOyJbDSm6C92MyMRsiRaRnLYfyDqsMizi9V8TK1QGggHiYGymKYBMy8WJrYquKBKTcPL7KYeaYAocJMxUWO0bmnKX2nwmZMKwRCUBYgqYSNqq0WMKfuzmI4rNxUlkCFdlyw2suMWMeE7+pgVkUhOgS4tEGB+fcFwwAh0aHBLuajs3gqnvDk8uZbuo6HVQjJDg7sEAKhhbNPKTEy4TSj5dTnKCZZKsZcPm/Px8S7kSrJt/4JDfbbwAI+BXzMSSWBLaBK5Ra2XwTVPsBQVVjBgOOPcVzhchA+aotQm4h2HCVQEUUzSy5Nttyg2JgGxInM7G1siRHCfE0ScpCa5bLZWeJaiE/Flmg2cnuG5DQiQxTNtcan8LRKeLsGCaEussJUYzCTAyQLMUvY5LgZmJQaj5VbimLuUc0SWgkCwYKAD7NRZDiooAwkWMSUO4z2HsSh1oBcp2SlmxP4GiA0EH/DzcYU5Q5EA9KvsdoTcWKy6kE8m8NQCCuKPUcy9JrTYYmSS8RJ7gY1r4HjoGYEFUIWQwgZHLFw4I6yMetdKJTXwWqKkPgTQIqqTUQGlGh/pJwELo1gKQelhhUnlX9E5qvUTzVBaOVKPQzSaWLAuVrisUiB0SzY/p2FYHH4h9QDXGs5TclEsX0qF4s3aqNnIFw0Kko0wZXnqNpps2q5TZXr9U9oZyz5eGTpiTZ8K040RpSoBVetI6qJ/gnxvVTagu0cw6mA9xcXZxKY4baoBmuQkLFjEvBJ9qmuUJAlT6Z6d7tGCa0lKnKUY0gExFaGzDlGKydLFzEaeS0SQqwX0w+eLt/ycFbmyR1M1mGwJfUgWSxy4FbveMBcRQNjSSUXHxHL1fHKzCbC8oYVF+JQDlouJRgDTkfJkgyejU/b8YMUZDI4MkOMl3moTNvFiJqX1wxhWRhOUSCV4ZKPIQHPxqbg5SNliYEkZhnK4DuxHNHklJKzG5jGWLoW4yHzQ+w2pwV6XFwiqTVU99NkUpIon4REjSNsS3YrMx27XWUm6ppQrW+BimgG/Cc3h7OKyOHsyYK6CMUx94vTakcjdRLyAW6atHMMG5aHVUK9fNt1FUKyZgb6AQaYagZ8Z64YjaWxpkPQmRWnHhXJqoyd6FBkHsXm8YbVcK2LrhvCd79HmJQRVmZKyUKMgHQbzxUKFtiwp6HIAHSP/XHSUgA4Bs4BNq4xNgN1x+YlRP0Qlr8LuoKTEyGT4WaURsw8u4ctc9iO52NpO87HLYyYXMapAsM90ZQYn8YJ8KV2cbOR6pCwcnDJJBgoV3gwd28Z25PpBPYkl9IJDn+Rurd8Bz9OFxnmfnqpiCEezn3/dAbegRTevJyvZ0LM5bOP7VrRAKohpQNJXECtWo6j5jkkuYF3AdIdbGeYfHZqc8DQMyFzK5ddxHg6iSEukFUJK2PQ6kMy2UokRGcMthvsT1LYboncfaePoWNCxpDP5mfw/fnFZ5y4XJxS70yAAdsxLqZENUNTfaV96mZyins8nVvGhehs9vk7nSjdEhrwg1w+nVpMNc7hSHY+t1AAKnx/ufjdj0/TpBDWio1EMhWdVx5NpeDMp9HFyOZlRF0SYoPWm8EYHOb9Qgo/jEUXZu7ERcZqSBSmYX+0OJVcwGCsMPVShXQ+ksNP01P2wlMRb27V6JLQQJRjf7KYKz5byM1Ep+7n809Sy5i4Toxbvwfnkrx/72HUA76HAe9ZnHs6nf0+8WApnyqKt3NFXBOE4EjmstmZKL6tWGagZkj9IzoHXnPq/lQ09Tyfj84Up55iS5H4oGJ0YfEWno7iqwp+mM8r0WdMLRBa7QkYd3x+Kdr63YO78ziXO6ncIpPwniVpUZS7ytLThVSU3KuXiMTuxu88ykZvPUznGuMPFx9uVKJ+CPdsvDeRWcznovloCqfTOXcsJ+buZm9yEBOf5e5G87OzOZxWljC5I4xZUu4+mlVOZpMpUGQ+l7+b37DgrS/CCrEv5rLf52/jWWVu9qKST+fnL0L5a08s5hfzcwu5bHQ+3kg6pviRks/emW/Jzs/lIvbpbDKfm7+PRb3qsAKwEE2nQFNFJbuwCDqLTqeiigUmYi46l1uYn88X8UJUtDN2DFlBOjl7O7o4txRL4dmcJZVK44r8W1+EbxlxtBEKwYfMw2wuvTi7lJoH/S2ZRW4qehOns7ncbLI1mkuCK13KJey48Z+z0cXZWWU+geMWrnD5PtYrYYWIDGNRDHhxPpueBW1GsdWOiwV8L914C6duptL5aK6QhKJxmWSryfzi4lw+Pz9fZHJ5CCmeytui9UoIg08qnJjKR2YWF7LuvJZpc3gpG7ndUVwE5xq3JDlI4SANh/cim0ouR2bnl3E+B5VG5V/SLSEwiqkEzoP6CnPZ2NLydx3JB6n009x8LhvPZa9m52eSyeLMzNPlp0+fFWLK4nI6N5cvMN9N2/XaxXiHEIK5gSumcid/sE/f/uHWcrL4PD1za2l2afbhw5mHM/mZ2wtTP/7449Tc4nIimn6M43cX57DaFqgZQlKt41vxHFnEx8UH6bTl5sN89nbu7tI/F6P5+Wg2WuQe308vFNS+PwTIB2CgjH67GJsi/voApzitagLIubnl+1PPb/30r5UjhcLMrYV/JBce4XTqnrYYjKcM9nev1xlhFWHW3SKp9QEy+Wb1zYuOjsLi4jLzbG7hu8dWrLVmiPrEd/+A7gkhQy0bHsPZnzzBt35bfXGko7W1g/Q2EhatWtJuyuDeMdFaIORKHVD1ycoxXW8IYEertTXBWblSMVi6YYOp/nkLnRNuGm7i1U+rnUdAh6LV072tT3rVFiEjvvz5TadGaMAez3YQdUtYdfD45c+vVjs//xzMVDSI20PULWHVwa788upFZ5mQsW4LsZYI8fNfX7751yogHjmSUOMC9nz4c6a6JKw2aisB/OWn335bXSWEHaXI59nyAl0TVh9p16+/vvpZJQTEMmEJsYYIt/4scOLXf//yMxCqiEC4jvgBO9UbYVUhK7749b9fvnrz+uWb1U7ibMoTEf75AKL+CN+9B9ZAAF/++5eXz8FMX3W+XlkBJbaqd0D34G6PwVPlUxZ6JqyqRPAyr191vvzPf37ufL228qI8ET2/41MYv38q1gYh7vrl19V/FQo//7z6fOX12ovVTpUQ8Hp7sOH9iDVByCVe/Xqks3P1xfO1I6+JDtVwgXHvcc/x44YPINYAoZXxrP5yE7d2rv72Zm3lTefaWutKT0dr7+9WsNHSWtp7EHVPaDVYxdWXL7BBPAJhout1Z+J168pKV2/Xc3zK03u8fLeeZ4tP4+uW8O1LyGVuvunCVkN3orWjd39H6/5E14q4H6bg8V7Pqd71i7aMGfonxInVF2Thvrf3VFfv2uu1/c9ff9610rXWe/xU96mKEnErRJ0SVkh3R5ea7HT3dnSsrR3pfKEGfLVArPgqCavV41FvRq05QuwRtexF5RFbj3ze2anlpeLmeUdKqRok9CQ8JUBVU56OI58TUXVYIVYQqBarAOqdUOzWYt3br7USWzURRW3bqop6rujZlPOpG/omxJ6VmwyMPJFIdKmytra2AvLy5crKGhGyDw4mPB44y9pRTYn6ItycdTMQKUQrJl8xhAlEa2vHEXA0xNm86CRNUxGktFYoWru7qn+3iZ4INwm5Tb/rTYJ8Aw9DPIno8SRgIgIhyM2ODtDdeplotYpVAXVOSO6bvfmmtTTZQEQx0dFxBPQIiWkiUdKh5oRwl8daLa/RNSFx/gwDhsp4iHR3JxLdXRuku7vbownu6iZ3SNUaIREO33yRqAjlYlnK3lXj6EpsuhWqZgjJB0iOvEhoEU8zXav67WYbebp6q05CPRPi9QGCFjtetK5/wkTbWbp7tqRFRlyrms/omnBdh+SmdSbxIoHL32kmlmZeAuagNg0N+Hmi2sJabRCWMBMdCQgX65G/JB0k2ose/Lyr2uqx9lAbhAQx4cGaWXIMg0USG0mSRpwn7jpVNWmvLUIrpKgecp8eo21aPYb171L0VAVcB60NQkKVENUknCl94VUJlaxIiVs6mZoiBCWK4C9FLfaDQLrtUVuKPe+9sIYIS4jlEKHGRXCvx3s/1NXXy2fXtrPKDVPxrUGSScngnv0fw8pMBaJoLd07o2WgDD6Aqy501CxhubtNZqN6H9QHJqHeCLcppFT0aLlMb+82ztfLPGw6sHdbckr9dD7RI6jn8DYu2n9wt9H+qOx9Wxgd3u2x7IjQ6EAJEZ9idflrsX+CaAEC9zR9nHhE9qvF4TGd/v7fnyLgbvBpff7s9p8kzb/j/VTzx0yImj87U7/n4L7mj/mXZPbU19fvaTq4b59ufoLkT5fmfQcPNjU1HQRNNtO7PZgdEfJbR83N+4g0N3+Uilz/aWCa/jhVWE2a9+mljtha6PIvHZefUHX9NK8/lE8iG8cOHa04rL3SUd5dd+D3M+izw+hw7/4zTXW4rqkeH61HPUePE73swUePIXzsdH3TUVy3pwkfPgVUPfvUC/HBunqEDx8HrAP1CH126ih9aH/vCfK30IGjp4/uLlaFHD1ddwYdPgGjOgNbGKH64+Ajj+/phVGjJgzO5Ez3Ce0IbMHjsZ7T6oWeE8dgbzNUuk29exE6fBhQD9WRF+j0/t0k2ixH956qRycqCfGJPej3XrVEasInABQfIkea0UHcA1t7z/SoF/Zg2OjpBdwTZ/A+dGL/CRodUlHR3hNo36FdI9osdYdO1JFRof2HYAvToEN4Pn4ak0nVBMTo9GnyCNvAewDtOVrvIeoFbjgZH+ohRrr/tGoG6LRGeKgX7HvXiDbL6c+OHkSHDoEmwOjovTTaUwfz62jTCdiFDtbVHWuG0cOhvc1oXx3ae/BMEzqkmmld84kzqG7fZ8f2HEP1n6l/Ah2DI+TFoaMq8Cf5JJ/kk/yPyftKWvXHcBEvCYIgIaezstFGseyHrtaHsO8t2imeQnwwFPD5AoFxo2NDJ6r8i7JUDTQYt6yFAJAWwiPmC+YLI2cDFxrk9VP1D/VWStZWlZOiaLk/MDIxEphsyGQyvoBx/RBbUj3P6r5epBxf9rGsA/FoiOUFeaitGa2bHUUJgczZwKRteMRvDAVGRjOy9ovHVPuQIJHf8e4bGhKAkpX6EDvE7irIVkKzQkho94+ZvHzY5D9/3msymdr50kFKCl3KZNodyBj3ItbWkLnUIKi/AC01mNrhzPYhr2Tzms7bTOdNXr+/XZe2S1NtQ32y3CbItNwn2WyC0G7rWz865BsdMSEnK03ITooaasjETcSzUNKQIMtCWxsr9AlyH3kNf0Pue8//Z/fEuWGLTC6Wf7sdckVCPGUyfT1qu97OU36zq0GC3fo0x41CEfN8K23rD0S+Lb+QMqNmG8/KprGR0HlZYtsyAxlZPQN0LmyW9et5PTgeGubSDaPR9l65IWdGMgIvybKtX5bGbBTfcCFjG7IZN1yobZB96j8gjt2mI0KzSJgwb5RLm7bNl4czmYCE+kIXAhcmB0eDyBHyZfzXNp+2+c9cFXabjggQ9t20fEBuDkEQlHi2zTEUOOvLBCnHX0czN4ofvEwXHoelqT2YqZR3bzjg8BkglJE8OGyaNJ/18kjKXBo14g2nM5sFM7h+t+lKso1vHDgRash4WVr2hv0+m+BENt+Fa9c//JUDNUT4uy3jgzSGdVwLjDQ0ICFkzvjrPiZCA77e4BttkFmTN+i74JNDgczI0Dau0iVh9WHjXuOFC6MByHSQbPOO+EYumPZWXrTFVbok3EoddcOZEd/otZDX25CZyAT8p7dzp1gtEVrxUeMIzMXRS6MZiP6m7QDWGKEBn7ruh7ifuZAZCRnrtnOzX20RkvHivYeMw8M3bNc/q/7rR7VCiLf+BA1Iz/Ee9Tbh7b0lOiLcIdEL4cG9dTsje/W/8v1JPskn2Y78H0WZP8Ew5B/DAAAAAElFTkSuQmCC',
      currency: 'EUR',
      prices: [
        {
          price: 1.79,
          shop: 'Lindt',
          link: 'https://example.com/li-excellence-li',
          unit: 'g',
          amount: 50,
        },
        {
          price: 2.49,
          shop: 'Amazon',
          link: 'https://example.com/li-excellence-am',
          unit: 'g',
          amount: 50,
        },
        {
          price: 2.39,
          shop: 'REWE',
          link: 'https://example.com/li-excellence-re',
          unit: 'kg',
          amount: 0.05,
        },
        {
          price: 4.99,
          shop: 'Edeka',
          link: 'https://example.com/li-excellence-ed',
          unit: 'kg',
          amount: 0.1,
        },
        {
          price: 1.99,
          shop: 'DM',
          link: 'https://example.com/li-excellence-dm',
          unit: 'g',
          amount: 50,
        },
      ],
      nutrition: {
        fat: {
          total: 49,
          saturated: 20,
        },
        carbohydrates: {
          total: 10,
          sugar: 1,
        },
        protein: 14,
        salt: 1,
      },
    },
    {
      id: '9',
      name: 'HELLO Roasted Almonds',
      brand: 'Lindt',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYTFBQWFhYZGxYbGhoaGRYYGBkYFhkZGRYYGBYaHysiGhwoHRkWIzQjKCwuMTExGiE3PDcwOyswMTABCwsLDw4PHBERGTMpISgxMDAwMDAwLi4uLjAwMDAwLjAwMDAyMDswMjEwMDAwMDAwMC4wMC4yMDQwMDAyMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABQEAACAQIDBQQDCwkDCgcBAAABAgMAEQQSIQUGEzFBIlFhcQcygRQjQlJTkZShsdHSFhdigpLB0+HwFTOyQ1Ryc4STorPC8SU0Y2SDo+Ik/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QALhEAAgIBAwMDAgYCAwAAAAAAAAECEQMEIVESE0ExUpEUcQUiMmHB8IHhobHR/9oADAMBAAIRAxEAPwD12HkPIUoUmLkPIUq9MYoVyk61n94d74sNIInWR3KB7IFPZJI6kfFJqZSUVciowlJ1FF9JKBztc8hcC57hXnnpS2hJDLDK6+8ZSp0JyOCT2rA+sCAOV8vMVD2ttVpcTIcysotkvyyOTw7LcFW9bUW7QZTrapKbRWSMRSuTCwsWJD5G5ZswvZed1Nu8W5HhyaiM24Sjtyehi00sdZE7fBmsPt9TYjPGRYqezc9xUoxv8962u5e+rTuIHIdiDkdSpJyglg4UkA6aHl0JuRWd3h9HEMMbSMUA0AyquZi2gt3HmfZUvYOKiwbwiGNVV3iRraEiVxGGJOrMCSbnut10SSw5Ere/waSbz4269PPk1O/8svuORYRaQ5b3sOzmGYZuVyNNfGvIJNm4x5Io5V4as1zztZfXGa4y3AtYa6itZvXviZJM65TEtzGhsUa2ZS8i5h1HLnYeZqlwG8V+M7ETIqqM5iswPERiypmIuEBJAI5qLgkkaTk5SuK+TOEe3CpSq/CNQuIXCYRIsO6xSZ0U9m4CanMGYHMSQL3+MfA1pd2N5+KVimyh2W6Mp7LjW626MLHwPh187xWOSaBiJI3bslSLpY6MwylbqB6p0p07eDYeBkUCVDfiaZhlOcBSG5EkmzDy1JNZRzzTt+NmaTwQapL19Hwez6edcIN+lvrpnZuJEsSSAWzqrW7swBtTzoDz1tXpHkME8qUTSZSbaUpQba86AIO2EvGQEzm4sufISQb9l/gtpoe/qOdU+zYpcSzLPDkiRtA+Vne1smYB3Aym+ua7Gx05VoMTBnUqb+YNiD0II5Ec70jAYPhLlzFjcks1rkk3JNhaspQuSb9C1KlRA21u5DiLF0UstshIvlsbjTuuKrTJhHb3PinQSpZlQu0YK3IDoA+utuZLA+ytDtGZlS6gk3F7DMQCdSF627qy+2p4ON75hw7WU396zp098LHOkYBuWsVsSDflUZqW9bl47e1kiLF4STDqsbBlVsgQjO4ZGNxkPaYgHOANSACL1b4XERxqxBGgzO1yT3Zmvr0I8LVm9nY+AOye5wJ4xw2kUwI1yPVSS4cLbkbC+Xyqwn2dhp4zIIFZx2WziTMMqi6yG2ZrLYWselZRn5T/AOC5RrZossVPLmOULkIFiwYEd4FtCT05c+tTMHjVclVYNYA3HceV+46HSstNsyEugjTEMyt/ds+IMFstwwLExi2hBU8yR5abZUASNRkCHqAbj5zzq8XW5b+nP8ESUUv3JxoqPOTcKEzA9bgAW7+tPXre9zOhL1HxJFiTyp6Q8qrtqsbHWwA+c1Le5UUQ/d6d/wBtFQLfpH5qKC6NZHyHkK7SYzoPIV0E1sYg1ec79YZTi1dvhRaHxickm/hxEOndXozVi/SBswyxXA7aFipF7glSp5c9CdPKsM8OuDSOjTZFCakzB7ybOM5i4TESKzg2APZI1FgNdFGh6VVe6cbFdcpYkcjmJYaDRT4X8ND1sK2u4OyZTKJZc1hfvsL3u1iTrqfIE1tpthRF82UMeYB17+XhqaxxYPyJTOjLqqm3B7Hnu8O0pPcOBjkBElmLLm5FMqJfXTRx161H3R2T7qkE0mUYeLMVMjACWQXGa7X7IJuWt8AAahiNN6RNz0xaRZJRDw+IBfLZxIASqljzuo+vSsltqfH4U+5kgLxRpcCNFKqp5MpylsxHUnNp4A05Y0pdT34HDM5Q6Vt62WG8m6OGlGmJmz3JZ2yhXzFmbsgKLXyW0+BboDV5utsrC8I4dV1sbEqVDctQdb+sCdb631515tht6Zyfe4yedw2XmLjVxZh48q1+4GGmlxKYjENqt+Gig5RdShZm6nKWHtJ1NRDvOauq4DIsKg6bbIuN9HjLMeFnCE6qpZV6dDrbyNPjcdRMvbyp8NQVsbc9Sbrewvbu79a9XdbjUWrybae+0aTSxmFzlkkW+ZRcq5F/C9q6nCPB5WbNmjTx7nqOB2hAiKvEQWAFr8rdKe/teH5Ra8eO/qf5ux83HP5q4d/l+QbXoZB+GqtnL3NT7F8nsP8Aa8Pyi/X91H9twfKL9f3V44d/h/m5/wB7/wDikL6QCOWGH+959Pk6LYdzU+xfJ7L/AG3B8cfMfupUG0o5DlRrmxPI8hz5jxFeNjf2TLm9y2W9s3Ea2YDlfh2vbpV/6Ot72xGL4ZiCDhu185Y6MgtbKNNfqoTZcJajqXVFUempFY8yapd645uGTDGXazns2DZ1jcxWuRpnK9dLVeBqrcRgGMhcMFBsT2btcC2hHMWtzvbL4mpyJuNUdkHTso4sA2I4bOeC2QjhsMzXJubOCAyiwIINxc3tcinZcC91gd5mQAKWTRSL6cT2aad/W1WjSYaHLIwRGdsoIF2LsbEAAXv327jflTmM2c7PnjcITbNob6d1iL6dDcX1774Rxqtt3/Bs5u99kSsFEUXKcptyIGW47yOV/LTyqVRaiur0MGNyzBbX6mw8T3UgG9z/AF/OnJIwwsRcUh1sLDQVEruxqhLnrVBtibMwX2n+vmq5xCXHO1UMpQy2TW3Mk8z/AFpSW5ohWWipPC8K5VUFl3GNB5ClWrkfIeQpVWZCTTE2HDaEc6kk00ZORAv43vagY1HgwugsB5fvpbEWym/sGg+blVTvJvGuHUC2aQ+qg8ereHlz+zB7U3rewkaYKyX1WRgWLsnZWMLyUAg6MDzAuwrCeeMXXqzox6ac11eiO767wPJPMmYCFDkC9k9pb53I53DZx+qKkYDbEciI8UrSqscaFpLofexZwcwHLXW3M31rL7ybUhdIgkS+6HBWSy5ffZGJY5iWDE3YG2ik26WDkMvuSARTEZ0Go17XNmA/VIB8z0rh1EJOL/do9HC4WkvCZrd1tjQ4rjSFNeKb9x7CG9u/tVsNmbJSL1Vt/XjVP6N8GyYcZxZ3LO3TV+nmBlHsrW5a9DDHphFPg8vPNSm2vSyPiBpavnneIWxWJ/10/wDzXr6GxVfP+8D5cbiGsrWmn0YBlPvjc1PPnWrMRWy4nkyRwmNDZjIxC5wAxLOzML8MLl7Km1+epqbPhM0ZSAMVa5QAKBIkTXmldiRqGCDUZRmyJc3NV77bJVkEOHUNbNkR482U3AYI4DC/wSLeFONvJNpZYwPe7gLoywjsRsL/AN2CScosLk95rJqXgu0MJsHEFioj1GQasgGaQZkVWLWZiCNBfnc2GtWeIwUGHiBbhu1pApbMeJJykYWH9zH6q/Ge50A1hflJOe0chI4mpDX98JzkENobaXGviahY3HtLlzW7KqoCiwsoAAt006DTnYam6qTe4rS9C8iwEfBAawFgxBVx8EpxFHEIZtDqNBe9jpd70Um2N/8Aik/xIaocPtd0ThjJlswsR8f1jz5kaadAKvPRef8A+0f6uT/pqoRabsJNOqPb8O+gvUfbkmWMtdhlseyQGNzawJB11/7c66+HLxlAStxzHSqpNlYhHDHELaxXJkcrqb5+27EuOQ1trqDpRk6mqigjV22L2JsyBZDMM+aRmsH0Ia5LLoLXuG7Nzy8K0dZTDbVwySnVo2RmDlkAVyCUzvKOz42JB1GgvWiw+MVlurBtL6EajoQO49KzxSX6SskX6j7NYXNQoHLOGvoM3Jjlte1io0LXB1PK1Rm2zEysyuGRQ2f4qWGucWzd/lZu6ouBkR2X3MzGMZiZFkDoSdCnauXI56Wy9+pFTOdyVP8AwCjsy9WS9D1waXpt20rW9tyaK7buNKoctr27/s8aoN32kJYshUE9m5BNvG2lTtty6hO809szDWtaiKt2aXSok5D/AEKKlcKiroiyWh0HkKWKTFyHkK6V1qiDtqRiU7JFyPEcxTlqbMenM28db+2gDxPeifGSYiYCBgQ5Gc2tw79jK2gIy2va/W/KntgbjMzcfEuWygm45LYa2Fri2vMDly5V6jiNhIWLKqlu82zX7zcG9JxuDvE6Ml+IrKT1IYEEXHf3/XWPaStnT35NJeDzbZWwYIphKpeVgW4akAqlyQSwDEsengOnMlW35oJZo2PvuJGVVjTIbspNlYKxFhoxJZbZQTa1V2P3bnzmMyTZb2yjQsOmdhofKwA6AVot0NzOGcwXKdNTctbuuenhXLDDNyuUmdMs+OK/Kj0DY2HyoNByHIk69asDTGEhygeFSDXoHnMi4oaV4RtNAdqOpCsGxdiGAYFWmswIbQ3BIr3fFV4PtuVY9pyyNmypiS5ygFiElz2AJAubW59evKgRIm2S64jFM0AEajEZLxqIwobKhQWsptaxH767vNE+Gmkk9z4cwXyIpiw9iTEGBuqhxYnMDcaju0quXaEXunES2kySiewyoGDTG/aGYgAMxOhN7eNO7Yx+GmkmmKTFpEyhSyIqOIhEjkrcvYqGy6XOh0vdCJu21UbVSIJGI1mwyBRGgUq/DZgyhbNrIw1vpYdKr8UgfGThlGRHxFlS0YZcOHyJ2ALXyICw11Lc6nzbxYU4lsWcPK8hMZCM6BEaMIMwYLct2AQSNLnTkRDl2xCWkaHDs80sjPeRkkCq5PEiWNVBKurujG4JDaWtQBZrg+LiTFJDEuGkfFRRlEiVozh0ZldSoz5gUW4Y2bM176U16MQRjwp5hJQfMWvT2z8FiXklxmHwEwlLN6zlgjzZs0kcTRq0nN7dpgubUEUx6NlK49VIKsFlUgggggG4IOoII1BoGe5YTkKeaMHnTGE5CpIFMCm2zsFJLSIicZSCGItfoVJGoupIvzF6i4bCTQtxcircFWROJJ3WZiSCx0tcAnzrRkVDEkvFKlRw7aMNTfx7vmrOWOLd+SlOSVeCoxhnlVUWCyM/aYyFbKDmvlFmuSAPI6g2sZWz9nSCQvKyMbCxVMpsDftXJufGrLFoWjcKcpKsAe420Pz03g1YKM5zNYXOmp68qy7cVL0svqdbD9qi4qYIDc/9qkSNYVQ7wSWQ+Olu4mqYooq3mEshYCw6eVX+BSwqk2LEOotWmw0QtVxCQ5ail8GirJsXGNB5Cu0mPkPIUoGqJO3rik9a7XCaQHJLW7vGm1gHnfrf7O72UvLca0pRYWoAhvs5TrzPjr9tOQRWNsvtqSKVQFiVFdagCgtQBExZ0rxltjridr4iF/VDyuwuRcKV0zDUauOWvPzr2jFcq8akMw2xOcOFZ1ZiQxyqyHIpW9jbVlt4258q59T1dmXQ6dOnwxqr3NPjd2MLKFiTDKtw2aRcqNGVuOY9Y51tzsbX1F68rxUOR3jJF1ZkvyuUYrcD2V6pLtLEZHMMS8STKe24yLdPggAkjQm2mpPImvK8WrCR1c3dXcOe9gxDG/idb15n4S8v5lN2tvNu/I5tPdHrHo62Th2wOHm9zQM5MwkkMaPJ2JmRWDMDpa1x0B/RsdNs7E5cl7RBlJcBY0CsSAgGl75bk+XfpXnO52+uDw+C9z4gSllkcgRqpur2N7swANyfZ51f4TflXXPh8DipFOWxdokU5SGzBrm5uL6X1NeyZtpbs1LOwYDim4ZwQWZuT5lNgdewjAj9E6akjzjBw8PeCZQOck7f7yIy/wDVetC29OMku42fBGxOnFnMhNhocqJpz5XHM95qt2FsWeTaIx2IeISOzZkjDZf7oxrZmOmijv5UEd2F11K/uem4T1RUimsONBTtM0O0UUUDG5RpTZOmlOSU1IByrORSImKmPT56zm0ps8gW+g+2tBtOcLGSSFHTz5Vm8AuZrnqahLc1RcbOg0FXMEemlRMFDpVlGtbIzkwtXaXRTII8fIeQpdNRjQeQpwUxnRXSK5XCaBBau10G9dtQAmumuFaVakAkGuFhSmFV6SHiZSrDnrplIoAlTrcV5VvNuYkuJmkMrAuxNgosNALXv4V6w9Yza398+vX7aTOPWZZ44Jxfkx8e6uER443SSQyZ7Mz2AKAEiyZeYLd/I0/hcLhcwWLCqxBexYKVyxuYmclySQWDAaHlfSpe88pjjWcDMYXV7dSCDG4H6rn5qgqFgkgWTECLLCAxJiUSMrqZFJcHQk3sNeetI445Zzjbk7/z/BbbHmWXMVhVFDOitZBn4blGIVR2Vuv8qiRbyxmKGXI1pZREBpcXLAMfCwB8mqqwu0zFZRKBlfGmSKyEqqtNIrnTMupSxvY3HfTaYIqUwrWQl4mFieznwc0NxcDk0V+XM0g7Sbbl916+iNVs/GiVS1itnlSx1vw3KE/OL+2rLZje+x+Z/wAJqh3XdjBd1ysZJyy9zGaRit/A6eyr3Z5tKnn9o/nQYwXTmSXJsoBpTtNQHSnas907XCa7SJDQxoQDULaGJy+dTSetVeJTMbnQdaxm2aQRTbXxDMQt/On9lwUzjI80mgsKuNmwWFOCKkyfhUsNKlikRrYUutDJheiuXoosQxGNB5CnAK5GNB5CuySBQWYgAcydAKoBQFGWq/3ezeovZ+M2l/Je7zpaxMfWYn6h8wqOteCul+SZp310Goq4de6gwL/WlLrDpJdFQ7OvqtfwOtEW0FzZHGRjyvyPkaakhUTLU00etPVyqENvWF3hmySyNa/aRR0F3ZVBLW09YX8q3UlYjeLDLJJKji6krcdD6pse8aUmefr66FfKKA7wLkzmNguXNzFybRHKR0Pvq2tzseWl3/7TYsQsa2EnDuz2N7sL2Ckj1LjlcMpHPTqbFiHMErp2WNxoIxcg89Io/Ds+dV+Fx0KxiXhuv/l7hnZimZypBv0Rmk87EaACpOFRjJflX9ZO2btgSOoC2DoJAwbNqxbssLaEBT36kjxJJtrK2Ux298aP1xcC0lmK2uLsiADqJFIPMVVbO2kiqswhYWWKPWV2KhkicLlYW7KysL8+yR8KljHo5JaAFiYzcysVAKcXViLJZ+yvS7j1QbUFvCk3tt9/9lnLtNwZG4QZVjhk0ftMJWcaAqB2chPPqPKrnAX4iXA5i+vWxvY9agJs6IKUsxBVUN3diUUtZcxN9M7fPU7Ckh1tqbjrQZxcXkj0ryjZ4aTSnrA61CjiJtr51MiW1We8Kptj1pbU1K1h41MikcmfSqja2OyIbW/nUvFSaWHXmaptsJfKP6P3Vlds0SEbGgY6tqa1OFisKp9lYQ3B6VfLpWsSZsWKQzUM1qhTznp9dKUqFGNkrOO+iq3O3ev9e2u1PV+xXQTzKqJmYgKBck9Baqe7zNmcWQG6J3dzN4/ZS9pTByI/gKFLeLWuFPgBY+0UyJHR75rqfgm2nl19nhRknQ4R8lkhtQ2IqDJPTTT1zSyNmqhyWBnoE9VfGNKWU1NldKLZJqZx5DLa1ybeY1GoPz1CGItXRN1qlkaIeMsMDiSpEcn6p7/A+NWBFU0pzrz17+oPfVhszFcRAT6w0bzFdcJWYTjQ6wrGbYBadwBqSoHtVa2ktY3bbZcQ57irfMq1TPO1/wChfcRJseaxUodQb9pRpr1zaadaiHdEdpTGoBsGTiAJzZlugf4zN89avaEJLtysyBddPWYg69NKFvZcxsS9yNLgMljfXlfS9SZLTRjaTfyZmDc4WzgIFuG/vGK5lK5SLHLe6qPZauR7mxgMoESjsgjiPoEQqqkA6DIpuORC631rSxqeFYkEgqSoy2NmVja57tLX5g1HEZtYsjaEaMuvYdT11uz0FPFFV6/JDGwZCfWj6j1jzHMaL56VChQrMFbmr2PdobHoKv8ABSKsty6G4Yeslx2mNxryPZv19XxqmYg4g2NwZDqORGY/voMp4oRcXHk1mDa4qSKYwiWFSKs9YblbSoUz1IxbVAvYEn2VlN70aRRHxmLCAk9OdVOzC0zljfw8qNqMWbJfQfbVvsXCgAWFKKLZaYSKwFSQKQgod7CtDM7It6g47EKim7AfVSsXjVAP3gCsZvLtJZDkTU9bXC+3XX6qlsqKZO/tle9PmNcrMe45Pir8w+6iluWbPAPcXOpbtHzbX99vZXcW9zTWCawHl+6lc6wybqjSPqLRriu2rkSU+EqEhtjOWi1P5K6UqqFZGArtPFKTlpNDs7A9qf2TLlnZejrf9Zf5XqOFpgzlcTB+k7L86VpidGWRGnkrGbfNpm/V/wAIrZS1jN4GtM5a1uz9grpl6Hla9N40lyiGBbp+41xmC6kgD9/QAfPVRtDbDi2QW6AnvOnXQe2qYSvMwDObsbDW3XqToB99c0s69Il6b8GlJdeV0uPJcbf2/wAJMsCiSZvAuIx3sBpmOlhc+PjSbDlxDYqORpT2rtImawIsRfhjs2BtbSwtpT8uzXVVZDEziS3DzXkcWFzlzZeGCdWGva52ArSbM2fwluVGdjdyqkJcm+VO5ATYAmiDbds6tWsGlxOEI7tV+/3bJh5d/wDKnsD66f6S/wCIU3IhAuRqdQOttTc92g9tOYaI50NvhL1B5Edx8a0WSDdJniw02aLjNxdM2uG5U4xtTOEGlGJe1h31q2e2hmQEmq3amJAGnsqwL3FVGOALWA8zWTNERtnYXM1z169K0OEiy2qLg4ABVhm+qmhsU7WpiS/MjXp3D+dL4lhc1WbZ2tGiEltel9b/AFGmSZ7eTbaEGMZj0uoI5fpdKqdj4TM17WpE0hmluVsPP5uQFq02yNnhQLURiW2HuKirfg0VfSKynwEmYKR1Fv6+apyxVTbFJVTEfXiYqfND+/Q/rVpIlBAI5GueUbNLoZWOnAtOiOuhKmgsbC13LTwSgpTomyMVpJSnylAjpUOxgR1VzNfG4ZfimRz7Fyj671eSDKpP9eFZjYk/Excst7qoEaHvsbufa161hEiTs2zNpWR3ii99MjC6ggAd7ZC2p6Cy/XWl4ulUO28QARfUg3A7zlI+wnv9tPNvEnEl12/BmtqYYENI2i5OR7PK5JsfVHL5qrIFkaEwxxpxD2+KDmyoAHKqb5VA7QJv3jQilby7UUqVZ9TyANvqB5ftDxqLs7FP2Ig65HHaUMSGI1BcKeYGmU9w0vqeSjvbqNsfhV4kWfNm7ds4F2EROpW4GlwrW7lFX2zZx60mZmW1lGW2ZvjW0PIdwuQLa09GsfDyZCoUWUDtZrDQkaBRfzP2mr2nh2hJEUQZeZyXF2K87GxuND7KeXFatL0PN0uuUsjjkaSe6f8ADJMkxkLEksR1voG5t07QuQvs7tKRu9ineXty9kS+9orBroX97LHUWy20Go621FQYIsRMhijjaNbEFyMpsL2sPg63NzUvdiNIuBDMYDJmjC8JZGbNnAXNIuVNDYHQ8qwjFxdvk9OWbHJOMXdLwemYc2FR8Y2tLVrWFJxQ0r0mzzooiGa2ppg3ZsxprF3p/CagjxArO/BqS16U840rsY6DnSXIGranu/lVJE2RZ5GY5VY38Kym8kKq40Uk/CvcnytoPPn4dae3m2y4usYsL21GnsA5+2qzZeDLtmYknxqkhlrsTAA6kVpcNBaouAw+UVZRitES2GSinLUUybMvvFh+DMmJH92+VJf0W5I58CLKfELVrgJRoOjcvM9PbWYm9JeEdCjQzFSLEFY7EEWI9eqrZe/UMJKZJWi+DcJny9zdq1x331rNwd7I7Vos9foZ6YY64ErFxelLDjQxTEdDaO/t7dL/ADp4X5Kf9mP8dDxvgPotR7GbNVrpWsX+dPC/JT/sx/jo/Onhfkp/2Y/x0u3LgPotR7GbIpQFtWM/Onhfkp/2Y/x0xjPShCykJFNfoGCAE/pEOTbwFNY3wL6LUexlrvltzJHw4z749wvgOr/uFQd1sMEAFYybeJXkMj5yTzNl+/QDoKt9m77QR80lPkE/FVKL4B6HUew9FvpXl/pJ25JFiDChsSiknwN/u/rS16fSRhvk5/2Y/wAdYre7awxWI40YKrkVe1YPcE9Vvpr30skW1SRWLQ51K3BlIFYnM2hOt3Ovnbma0e6s6mQa2UCzMASbkjtZfIkW8L9dKbDQxDVyx8gLfW1zVzgtp4aP1UcdTZUF/wDirJYpeSdTg1Lg4Rxt3/eTcxSRZiM/ZGokVZDbloIiDr5m3Pyp2bEZgADxCR6zC1u4BB2TbTXl51lV3ugHwJPmT8VK/LGH4sn7Kfiqu07tnjv8P11NRw1f/X/peyTSfHaQ9A9hEvddEAznw9XxowsdpUZg00mdO0SFRBnHqheduijTTUnWqT8soPiS/Mn4qaTfhQ62hJUMhJzgNlDAtZctibA21HPmKSwK7S3NoaH8SaUXj2XLPVs2tz51G2htNU/0u6shN6TsOb5Yph+rH+Oqg77QlszJKfYn4qcoz8I9OOgz+YM2aylnBNT8Clhf2/dWKw2/+GFy0cxPSwT8dSk9JmGVbCKb2rHb/HSWOXlFPRZ/YzYccjl9lNYzEiMZ5SQOi82b2DX5qx7ekqD4MUt+8qht5APULH78QONFnv1JEf1APVKEuA+hz+xkrH4hsTNmClVGgB+6r3ZWBsBWVwm+eGXnHMfYn46sYvSNhR/kp/2Y/wAdWovgT0Wf2M2+Hjp+sUnpQwo/yU/7Mf46UPSnhfkp/wBmP8dXTM/odR7GbSisZ+dTC/Iz/sx/jooph9DqPYzyr84uM+Lhfo0X3U1Nv7im5phT/ssB+1TWbopHL3Jry/kvfywxPxcL9Ewv8OmzvZiSb+8DywuDt/yqpqKA7s+X8lwN7MT3wfRcF/CpQ3txP/tz/smC/hVS0UB3Z8v5L5d88T8TCfRMN+5Kfj3/AMWOSYX6NAPsWs1RTDuT5fyapPSRjB8HC/Rov3CnF9JmM+Jhfo8dZGikLrlybD85+M+Twn0dPvo/OhjPk8J9HT76x9FFB1y5NiPSjjPksJ9HX76D6UMZ8nhPo6/fWOoooOuXJsD6T8Z8nhPo6ffSPzl434mF+jR1kqKKDrlyak+kXGfFwv0aL7qbk3+xZ5phfosB+1azVFA+5Lll8d88T8TCj/ZML+9KT+WOJ+LhvomE/h1R0UB3Z8svPywxPxcL9Ewv8Oufldie7DfRMJ/CqkooDuz5Zdje/E92G+iYP+HSvywxPxcL9Ewv8OqKigO7Pl/Je/ljifi4X6Jhf4dH5Y4n4uF+iYX+HVFRQHdnyy9/LDE/Fwv0TC/w6Dvhifi4X6Jhf4dUVFAd2fLLv8rsT3Yb6JhP4VFUlFAd2fLCiiimQFXOwt08VikaSBEKKWDM0sMeXKAzXDuGsAQb2t41TVodxT28YO/AY0fNHm/d9dICtfYk6xzSlBw4ZFjlYOjhXe4UAqSGFxa4uNRTku7eJRZHaIhI44ZXbMmVY57cJr5tS19FFzodNK1e6+GzbExcd0XiHESAFlDscGuElGRCczAATXI5aX51YekPiNsjAmLLwxFhWxIF8+doETDs4+T0cDpmA60Aef4zYs0USTSKqLIFZAZIuIyOCVcQ5s+Qj4RW2oprDbOlkjklSMskZjVyLdkzFliFr3OYqRoPPnV5v2sGaAq8hn9z4LOpRREE9yx5cr5szNyPqga+Guj9DuCSWDFQt/lZsEo84jLOB/8AWfnoAx53TxYmmgMaq8IUylpIlSMMAVLyswQAgjrVS62JBtoSNCGGmmjC4I8Roa9N2/JBLJtiSZ5EhddlyXjVXftxo6hVZlXmQLk15ffp1oAtNgbu4nGMy4dFdly3BeJLZyQts7DNqDyvSn3axAkliyKzQxNNJklicCJCAzhkYg2zDs3v4U9uDJl2lgm/9eEftsF/fWp9EWGUyY0MUHEyYa7sq3GJaVSq5iLsTGvZGptpQBjcJu9iZYHxMcJaGPNmfMgtkALkIWzMFBBJUEDrUvHbl4yGEzyRxrGATfj4ckgAMcqrISxsRoLnUaVcbBmeTANArNDNhodpMQ8WaOeGVEE6rJcZJEysOR5jXmKqcTrsrD8hlxmJXl8aKBr+ygCv2vsWbDlVnVUY37HEiaRbWPvkaMWjvfTMByNGA2HiJhG0URZZZeAhuoBlyq2Q3OnZYG50tfXQ1bektYBtDEcJ5GYyzcXOioqvn5RkMSy9LkDl46bP0URp7gRn/wAlisRih4+54Ioz/wA36qAPO4t28SwmORVWF2jkeSWGNFdb3jDyMA76clv0qrrfbyRwjC44SvIpG1MXwwiq2aQR2UOWYZU53Iue4Vgb0ASIsBI0Uk6reONo1drr2WlzZBYm5vlbkDa2tWEO6eLeEYhYLxsjSL75FxGjQkM6wl+Iyix1C8teVSdki+y8f4S4A/OZxWq3dGbEbFb4+CxcR8o0xI+0/VQBhP7BxGeOPh9qWLjIMyWMWV3zli1lAVHNiQdKTNsWZIFndVSN7FM0kayOpOXOkJbiMt/hBbeytdhW/wDCRjc13TDS4DXnmkxKugHlBLJ5gVWb6rDwMAc8nH9yYcZci8MR3l1z5s2fN0y2sOdAGew+AkdJZUQskSq0jC3YV2CKSL3N2NtL9/Kp77q4oTthjFaVIxI4LxKqRsFOd5GYIo7ag3PM1qPRLgxNDtKEkDixRRAno8pkWP8A48lW++IhbH7QkldkhfARE8NQ7lBiYEBRWIGuQDUi2a/SgDy2eIozISpKkglWV1Nja6upIYeINN0qUrmIUki5y3ADFb6EgEgG3QE+dJpgFFFFABRRRQAUUUUAFStnbRkgLmMgGSOWJri/vcqlHt3Gx0NRaKALHC7enjWJFK5YlxCKpUEFcUpWYOPhXBtrysO6nxvVicrJnUq2GXClSoKmFPUJHLOvR+Yuap6KQFrtLeKWeGOGRIDw1jRZBEgmKxLlRGmAzEBbDxtSNj7w4jCqVgk4d5EkuFUsHjWRFsWBFrSNcW7vbW0UAXmE3unR3bLDIJI4I3SWJJI2XDqqREo3wgFBv3k+Fo028EzYdsL72IWlMxVY0X3wi1gQNEHQdOXLSqyigB/Z+MaGWOZLZ4nSRbi4zRsGW46i4FP4XbU0YARgLTR4i+UX4sWbhm/cM7aeNQaKYF7FvliVilhvGUl4vONC0YxB9/WJrXjV+o15aWOtVb7QcwDDXHDWR5Bp2s7okZObuyounnUaikBa7wbxS4shpkgDgks6RRxySMbXMjqLsdKTgt48RDEIYnyJ79yVSSJ1RZVJYG4IjXyufC1ZRQBfJvjP7+GTDyLNK8zLLDHIqyvcM6BvVNjbry87wcbtyWXDwYZyvCgz8MBFVryG7FmHrH+jeq+igC33f3kkwqyokcEqS8POk0YkQmIsUOUkaguamYXfjERxiNUw/Z4wicwrxIRMWMiwt8Fe21gQbA27qzlFAEsbTk9z+5bjg8XjZba8Th8K+buy9Kl4veKWXDph3SBlRVRJDEnHWNGzKgltmC3JHkT3mqmigCx2Pt6fDK6wuEztC5OUMQ2HfiRkXBGj62IINqlxb44gSCVuDIeCMOyyRrIjxBxIA6NozZgDfTlVHRQBbPvJOYZ8OBEkU8iyOqRIgDKQQEsOwnZXs+Hib1NFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z',
      currency: 'EUR',
      prices: [],
      nutrition: {
        fat: {
          total: 36,
          saturated: 16,
        },
        carbohydrates: {
          total: 60,
          sugar: 35,
        },
        protein: 8,
        salt: 2.5,
      },
    },
    {
      id: '10',
      name: 'Cacao Pur',
      brand: 'Lindt',
      image:
        'https://www.falstaff.at/fileadmin/user_upload/01-Lindt-Cacao-1366.jpg',
      currency: 'EUR',
      prices: [
        {
          price: 3.69,
          shop: 'Lindt',
          link: 'https://example.com/li-cacao-li',
          unit: 'g',
          amount: 80,
        },
        {
          price: 2.49,
          shop: 'Amazon',
          link: 'https://example.com/li-cacao-am',
          unit: 'g',
          amount: 50,
        },
        {
          price: 4.99,
          shop: 'REWE',
          link: 'https://example.com/li-cacao-re',
          unit: 'kg',
          amount: 0.1,
        },
        {
          price: 3.99,
          shop: 'Edeka',
          link: 'https://example.com/li-cacao-ed',
          unit: 'kg',
          amount: 0.08,
        },
        {
          price: 2.99,
          shop: 'DM',
          link: 'https://example.com/li-cacao-dm',
          unit: 'g',
          amount: 50,
        },
        {
          price: 2.99,
          shop: 'Müller',
          link: 'https://example.com/li-cacao-mu',
          unit: 'g',
          amount: 80,
        },
      ],
      nutrition: {
        fat: {
          total: 52,
          saturated: 20,
        },
        carbohydrates: {
          total: 21,
          sugar: 10,
        },
        protein: 10,
        salt: 1,
      },
    },
  ],
};
