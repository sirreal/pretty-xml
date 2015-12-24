pretty-xml
==========

Utility for pretty formatting XML

Just a simple wrapper around [pretty data xml](https://github.com/vkiryukhin/pretty-data) by [vkiryukhin](https://github.com/vkiryukhin).

Usage
-----
### Basic
```shell
echo '<some-xml><some more="here">xml</some></some-xml>' | pretty-xml
```

#### Output:
```
<some-xml>
  <some more="here">xml</some>
</some-xml>
```


### Also allows minification by `--minify` flag

```shell
echo '<some-xml>
  <some more="here">xml</some>
</some-xml>' | pretty-xml --minify
```

#### Output:
```
<some-xml><some more="here">xml</some></some-xml>
```


Installation
------------
```shell
npm install -g pretty-xml
```
