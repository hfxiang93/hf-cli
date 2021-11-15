## Installation

```
npm install hf-code-cli -g
```

or

```
git clone https://github.com/hfxiang93/hf-cli.git
cd hf-cli && npm install
npm link
```

## Usage

Open your terminal and type `hf -h` , you'll see the help infomation below:

```
Usage: hf <command>

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  add            add a new template
  delete         delete a template
  list           List the templateList
  init           init a project
```

## hf add

This command would help you to add a new template to the `templates.json`, which will be used by `hf` to init projects.

```
$ hf add
? 请输入模板名称 admin
? 请输入模板地址 https://github.com/hfxiang93/vue-ant-template.git

√ Add a template successfully!

The latest templateList is:

┌───────┬─────────────────────────────────────────────────────┐
│ name  │ url                                                 │
├───────┼─────────────────────────────────────────────────────┤
│ app   │ https://github.com/hfxiang93/vue-cli4-vant.git    │
├───────┼─────────────────────────────────────────────────────┤
│ admin │ https://github.com/hfxiang93/vue-ant-template.git │
└───────┴─────────────────────────────────────────────────────┘
```

## hf delete

To delete a template, you could use this command:

```
$ hf delete
? 请输入要删除的模板名称 admin
? 请输入要删除的模板名称 admin

√ Deleted successfully!

The latest templateList is:

┌──────┬──────────────────────────────────────────────────┐
│ name │ url                                              │
├──────┼──────────────────────────────────────────────────┤
│ app  │ https://github.com/hfxiang93/vue-cli4-vant.git │
└──────┴──────────────────────────────────────────────────┘
```

## hf list

This command will shows you the templates list.

```
$ hf list
┌──────┬──────────────────────────────────────────────────┐
│ name │ url                                              │
├──────┼──────────────────────────────────────────────────┤
│ app  │ https://github.com/hfxiang93/vue-cli4-vant.git │
└──────┴──────────────────────────────────────────────────┘
```

## hf init 

You can init a templates use this command

```
hf init app project
```
