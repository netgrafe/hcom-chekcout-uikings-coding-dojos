# Laser Light

## The task

Decide about a magical map whether all the target will be fired by the guardian's laser towers.
On the map we have laser towers, blockades, light reflecting mirrors, space-jump portals and target enemies.

```
f(scene: string)
```

Figure out what happens with the lasers and the towers and the targets and print the return with one of the following results:

1. Crossing or touching rays of different towers will explode, return `:/`
1. When all targets are hit by laser, all towers are happy, return `:D`
2. When at least one targets remain alive, return `:(`


## Rules, elements

### Laser towers

We have towers shooting lasers to the direction they are facing:
```
< : left
> : right
^ : up
v : down
```

### Mirrors

```
\ or /
```

The mirrors `/` and ` \ ` (forward- and backslash) will rotate the rays by 90 degrees. They are reflective on both sides.
```
  @      v
> / <  @ \ @
  @      ^
```
> first tower hits the top target, second hits the bottom  one
> bottom towers hits the left target, top tower hits the right one

### Blockades

```
#
```

Blockades are impervious to lasers and block its way; their character is `#` . 

### Targets

```
@
```

Targets are signed by `@`, we should shoot them all. Additionally, the targets are blocking the laser too.

### Space-jump portals

```
0, 1, ... 9
```

And here is where the fun starts: we have portals! They are numbered from `0` to `9` and they come in pairs: 

- lasers go into one of them, and come out of the other one
- portals do not change the direction of the lasers
```
      v
         
> 9 # 9 @
         
  #
```
> left tower hits the target, top target hits the bottom blockade.

### Others

Lasers reaching the edge of the scene will never come back.

The scene will be

- provided as a multi-line string, lines separated by `\n`
- will be rectangular (space padded)
```
scene = 
  "      v  \n" +
  "> 9 # 9 @\n" +
  "  #      ";
```

## Example Test-Cases

### Example 1

Input
```
      v  
         
> 9 # 9 @
         
  #      
```

Output:
```
:D
```

### Example 2

Input
```
     v 
> 9#9 @
```

Output:
```
:/
```
> rays are crossed

### Example 3

Input
```
 vvvv 
 \\\\\
 /////
 1234 
 4321 
///// 
\\\\\ 
 @@@@ 
```

Output:
```
:D
```

### Example 4

Input
```
> \  @
> \  @
> \  @
```

Output:
```
:(
```

> top target is not getting lasered, because the bottom tower's ray is redirected into The Nothing
