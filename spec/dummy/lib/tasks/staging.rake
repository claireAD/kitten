namespace :staging do
  namespace :assets do
    task precompile: :environment do
      sh 'rm -rf app/assets/webpack'
      sh 'rm -rf public'
      sh 'yarn build'
      sh 'bin/rake assets:precompile'
    end
  end
end
