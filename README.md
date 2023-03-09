# rollup-lib-packer
Rollup Package Template.

You can just use `src/lib/<your-library-name>` for your unpacked library.

The entry of your library is `index.ts`.

If you want to add `external` option, edit `packer/index.ts`, and run

```shell
yarn build-packer
```

then use `yarn build` to pack.
