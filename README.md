# Kelex

## Add a component
```
nx g @nrwl/react:component button --project=shared-ui --export
```
```
// generate .stories.ts
nx g @nrwl/react:stories --project=shared-ui
```

## ToDo
- [ ] Stepper UI that aggregates a release, shows a list of commits from last build, select tickets from commits, add formatted tickets and descriptions to Bitrise message, trigger bitrise build with release tag and ticket descriptions, create "build" entity
